import common.{type OptionItem, type State, State}
import gleam/dynamic/decode
import gleam/list
import gleam/option.{type Option, None, Some}
import gleam/set
import lustre
import lustre/attribute.{type Attribute}
import lustre/component
import lustre/effect.{type Effect}
import lustre/element.{type Element}
import lustre/element/html
import lustre/event

// MAIN ------------------------------------------------------------------------

const component_name = "radio-first"

pub fn register() -> Result(Nil, lustre.Error) {
  let app =
    lustre.component(init, update, view, [
      component.on_property_change("state", {
        common.state_decoder() |> decode.map(StateChanged)
      }),
    ])

  lustre.register(app, component_name)
}

pub fn element(attributes: List(Attribute(message))) -> Element(message) {
  element.element(component_name, attributes, [])
}

// MODEL -----------------------------------------------------------------------

type Model =
  Option(State)

fn init(_) -> #(Model, Effect(Message)) {
  #(None, effect.none())
}

// UPDATE ----------------------------------------------------------------------

type Message {
  StateChanged(State)
  CheckChanged(String, String, Bool)
}

fn update(model: Model, message: Message) -> #(Model, Effect(Message)) {
  case message {
    StateChanged(state) -> #(Some(state), effect.none())

    CheckChanged(type_, value, checked) ->
      case model {
        Some(state) -> {
          let next_state = case type_ {
            "radio" ->
              State(radio: Some(value), checks: set.insert(state.checks, value))

            _ ->
              State(..state, checks: case checked {
                True -> set.insert(state.checks, value)
                False -> set.delete(state.checks, value)
              })
          }

          #(model, event.emit("state-change", common.encode_state(next_state)))
        }

        None -> #(model, effect.none())
      }
  }
}

// VIEW ------------------------------------------------------------------------

fn view(model: Model) -> Element(Message) {
  case model {
    Some(state) -> {
      let on_change_decoder = {
        use values <- decode.field("target", {
          use value <- decode.field("value", decode.string)
          use type_ <- decode.field("type", decode.string)
          use checked <- decode.field("checked", decode.bool)

          decode.success(CheckChanged(type_, value, checked))
        })
        decode.success(values)
      }

      html.section(
        [event.on("change", on_change_decoder)],
        list.map(common.options, fn(item) { view_item(state, item) }),
      )
    }
    None -> element.none()
  }
}

fn view_item(state: State, item: OptionItem) -> Element(Message) {
  let checked = set.contains(state.checks, item.id)
  let radio = state.radio == Some(item.id)

  html.div([attribute.class("row")], [
    html.input([
      attribute.type_("radio"),
      attribute.checked(radio),
      attribute.value(item.id),
    ]),
    html.input([
      attribute.type_("checkbox"),
      attribute.checked(checked),
      attribute.disabled(radio),
      attribute.value(item.id),
    ]),
    html.label([], [html.text(item.label)]),
  ])
}
