module CheckFirst exposing (Msg, update, view)

import Common exposing (Option, State, getOptions)
import Html exposing (Html, div, input, label, section, text)
import Html.Attributes exposing (checked, class, disabled, type_)
import Html.Events exposing (onCheck)
import Set


type Msg
    = CheckChanged String Bool
    | RadioChanged String


update : Msg -> State -> State
update msg state =
    case msg of
        CheckChanged id checked_ ->
            if checked_ then
                { checks = Set.insert id state.checks
                , radio = Just (Maybe.withDefault id state.radio)
                }

            else
                { checks = Set.remove id state.checks
                , radio =
                    if state.radio == Just id then
                        Nothing

                    else
                        state.radio
                }

        RadioChanged id ->
            { state | radio = Just id }


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
            [ type_ "checkbox"
            , checked checked_
            , onCheck (\isChecked -> toMsg (CheckChanged item.id isChecked))
            ]
            []
        , input
            [ type_ "radio"
            , checked radio
            , disabled (not checked_)
            , onCheck (\_ -> toMsg (RadioChanged item.id))
            ]
            []
        , label [] [ text item.label ]
        ]
