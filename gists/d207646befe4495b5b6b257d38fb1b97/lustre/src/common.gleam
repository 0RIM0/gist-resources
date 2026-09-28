import gleam/dynamic/decode.{type Decoder}
import gleam/json.{type Json}
import gleam/option.{type Option}
import gleam/set.{type Set}

pub type OptionItem {
  OptionItem(id: String, label: String)
}

pub const options = [
  OptionItem(id: "opt1", label: "Option1"),
  OptionItem(id: "opt2", label: "Option2"),
  OptionItem(id: "opt3", label: "Option3"),
  OptionItem(id: "opt4", label: "Option4"),
]

pub type State {
  State(checks: Set(String), radio: Option(String))
}

pub fn encode_state(state: State) -> Json {
  json.object([
    #("checks", json.array(set.to_list(state.checks), of: json.string)),
    #("radio", json.nullable(state.radio, of: json.string)),
  ])
}

pub fn state_decoder() -> Decoder(State) {
  use checks <- decode.field(
    "checks",
    decode.list(decode.string) |> decode.map(set.from_list),
  )
  use radio <- decode.field("radio", decode.optional(decode.string))

  decode.success(State(checks: checks, radio: radio))
}
