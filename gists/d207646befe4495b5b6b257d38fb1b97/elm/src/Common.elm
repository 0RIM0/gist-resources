module Common exposing (Option, State, encodeState, getOptions, stateDecoder)

import Json.Decode
import Json.Encode
import Set exposing (Set)


type alias Option =
    { id : String, label : String }


getOptions : List Option
getOptions =
    [ { id = "opt1", label = "Option1" }
    , { id = "opt2", label = "Option2" }
    , { id = "opt3", label = "Option3" }
    , { id = "opt4", label = "Option4" }
    ]


type alias State =
    { checks : Set String
    , radio : Maybe String
    }


encodeState : State -> Json.Encode.Value
encodeState state =
    Json.Encode.object
        [ ( "checks"
          , Json.Encode.set Json.Encode.string state.checks
          )
        , ( "radio"
          , case state.radio of
                Just val ->
                    Json.Encode.string val

                Nothing ->
                    Json.Encode.null
          )
        ]


stateDecoder : Json.Decode.Decoder State
stateDecoder =
    Json.Decode.map2 State
        (Json.Decode.map Set.fromList (Json.Decode.field "checks" (Json.Decode.list Json.Decode.string)))
        (Json.Decode.maybe (Json.Decode.field "radio" Json.Decode.string))
