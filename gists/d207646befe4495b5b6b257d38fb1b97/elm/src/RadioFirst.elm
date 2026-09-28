module RadioFirst exposing (Msg, update, view)

import Common exposing (Option, State, getOptions)
import Html exposing (Html, div, input, label, section, text)
import Html.Attributes exposing (checked, class, disabled, type_)
import Html.Events exposing (onCheck)
import Set


type Msg
    = RadioChanged String
    | CheckChanged String Bool


update : Msg -> State -> State
update msg state =
    case msg of
        RadioChanged id ->
            { radio = Just id
            , checks = Set.insert id state.checks
            }

        CheckChanged id checked_ ->
            { state
                | checks =
                    if checked_ then
                        Set.insert id state.checks

                    else
                        Set.remove id state.checks
            }


view : State -> (Msg -> msg) -> Html msg
view state toMsg =
    section []
        (List.map (viewItem state toMsg) getOptions)


viewItem : State -> (Msg -> msg) -> Option -> Html msg
viewItem state toMsg item =
    let
        checked_ : Bool
        checked_ =
            Set.member item.id state.checks

        radio : Bool
        radio =
            state.radio == Just item.id
    in
    div [ class "row" ]
        [ input
            [ type_ "radio"
            , checked radio
            , onCheck (\_ -> toMsg (RadioChanged item.id))
            ]
            []
        , input
            [ type_ "checkbox"
            , checked checked_
            , disabled radio
            , onCheck (\isChecked -> toMsg (CheckChanged item.id isChecked))
            ]
            []
        , label [] [ text item.label ]
        ]
