import check_first
import common.{type State, State}
import gleam/dynamic/decode
import gleam/http/response
import gleam/option.{type Option, None, Some}
import gleam/set
import lustre
import lustre/attribute
import lustre/effect.{type Effect}
import lustre/element.{type Element}
import lustre/element/html
import lustre/event
import radio_first
import rsvp

// MAIN ------------------------------------------------------------------------

pub fn main() {
  let assert Ok(_) = check_first.register()
  let assert Ok(_) = radio_first.register()

  let app = lustre.application(init, update, view)
  let assert Ok(_) = lustre.start(app, "#app", Nil)

  Nil
}

// MODEL -----------------------------------------------------------------------

type Model =
  Option(State)

fn init(_args) -> #(Model, Effect(Message)) {
  #(None, register_service_worker_effect())
}

// UPDATE ----------------------------------------------------------------------

type Message {
  ServiceWorkerRegistered
  Loaded(Result(State, rsvp.Error(String)))
  Clear
  StateChanged(State)
  ApiFinished(Result(response.Response(String), rsvp.Error(String)))
  Alert(String)
}

fn update(model: Model, message: Message) -> #(Model, Effect(Message)) {
  let state_change = fn(state: State) { #(Some(state), post_api(state)) }

  case message {
    ServiceWorkerRegistered -> #(model, get_api())
    Loaded(Ok(state)) -> #(Some(state), effect.none())
    Loaded(Error(_)) -> #(model, show_alert("エラーが発生しました"))
    Clear -> state_change(State(checks: set.new(), radio: None))
    StateChanged(state) -> state_change(state)
    ApiFinished(_) -> #(model, effect.none())
    Alert(message) -> #(model, show_alert(message))
  }
}

fn get_api() {
  rsvp.get("./api", rsvp.expect_json(common.state_decoder(), Loaded))
}

fn post_api(state: State) {
  rsvp.post(
    "./api",
    common.encode_state(state),
    rsvp.expect_any_response(ApiFinished),
  )
}

fn register_service_worker_effect() -> Effect(Message) {
  effect.from(fn(dispatch) {
    register_service_worker(fn(result) {
      case result {
        Ok(_) -> dispatch(ServiceWorkerRegistered)
        Error(message) -> dispatch(Alert(message))
      }
    })
  })
}

fn show_alert(message: String) -> Effect(Message) {
  effect.from(fn(_dispatch) { alert(message) })
}

@external(javascript, "./ffi.js", "registerServiceWorker")
fn register_service_worker(callback: fn(Result(Nil, String)) -> Nil) -> Nil {
  callback(Error("Not Supported"))
}

@external(javascript, "./ffi.js", "alert")
fn alert(_message: String) -> Nil {
  Nil
}

// VIEW ------------------------------------------------------------------------

fn view(model: Model) -> Element(Message) {
  case model {
    Some(state) -> {
      let state_change_decoder =
        decode.at(["detail"], common.state_decoder())
        |> decode.map(StateChanged)

      html.div([], [
        html.header([], [
          html.h1([], [html.text("Gleam/Lustre")]),
          html.button([event.on_click(Clear)], [html.text("クリア")]),
        ]),
        html.main([], [
          check_first.element([
            attribute.property("state", common.encode_state(state)),
            event.on("state-change", state_change_decoder),
          ]),
          radio_first.element([
            attribute.property("state", common.encode_state(state)),
            event.on("state-change", state_change_decoder),
          ]),
        ]),
      ])
    }

    None -> html.div([], [html.text("Loading...")])
  }
}
