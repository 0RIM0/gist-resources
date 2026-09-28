port module Main exposing (Model, Msg, main)

import Browser
import CheckFirst
import Common exposing (State, encodeState, stateDecoder)
import Html exposing (Html, button, div, h1, header, main_, text)
import Html.Events exposing (onClick)
import Http
import RadioFirst
import Set



-- MAIN


main : Program () Model Msg
main =
    Browser.element { init = init, update = update, view = view, subscriptions = subscriptions }


port showAlert : String -> Cmd msg


port registerServiceWorker : () -> Cmd msg


port onServiceWorkerRegistered : (() -> msg) -> Sub msg



-- MODEL


type alias Model =
    Maybe State


init : () -> ( Model, Cmd Msg )
init _ =
    ( Nothing
    , registerServiceWorker ()
    )



-- UPDATE


type Msg
    = ServiceWorkerRegistered
    | Loaded (Result Http.Error State)
    | Clear
    | CheckFirstEvent CheckFirst.Msg
    | RadioFirstEvent RadioFirst.Msg
    | ApiFinished


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        ( nextModel, cmd ) =
            case msg of
                ServiceWorkerRegistered ->
                    ( model, getApi )

                Loaded (Ok state) ->
                    ( Just state, Cmd.none )

                Loaded (Err _) ->
                    ( model, showAlert "エラーが発生しました" )

                Clear ->
                    ( Just
                        { checks = Set.empty
                        , radio = Nothing
                        }
                    , Cmd.none
                    )

                CheckFirstEvent checkFirstMsg ->
                    ( Maybe.map (\state -> CheckFirst.update checkFirstMsg state) model
                    , Cmd.none
                    )

                RadioFirstEvent radioFirstMsg ->
                    ( Maybe.map (\state -> RadioFirst.update radioFirstMsg state) model
                    , Cmd.none
                    )

                ApiFinished ->
                    ( model, Cmd.none )
    in
    if model == Nothing || model == nextModel then
        ( nextModel, cmd )

    else
        case nextModel of
            Just state ->
                ( nextModel
                , Cmd.batch
                    [ cmd
                    , postApi state
                    ]
                )

            Nothing ->
                ( nextModel, cmd )


getApi : Cmd Msg
getApi =
    Http.get
        { url = "./api"
        , expect = Http.expectJson Loaded stateDecoder
        }


postApi : State -> Cmd Msg
postApi state =
    Http.post
        { url = "./api"
        , body = Http.jsonBody (encodeState state)
        , expect = Http.expectWhatever (always ApiFinished)
        }



-- VIEW


view : Model -> Html Msg
view model =
    case model of
        Just state ->
            div []
                [ header []
                    [ h1 [] [ text "Elm" ]
                    , button [ onClick Clear ] [ text "クリア" ]
                    ]
                , main_ []
                    [ CheckFirst.view state CheckFirstEvent
                    , RadioFirst.view state RadioFirstEvent
                    ]
                ]

        Nothing ->
            div [] [ text "Loading..." ]



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    onServiceWorkerRegistered (\_ -> ServiceWorkerRegistered)
