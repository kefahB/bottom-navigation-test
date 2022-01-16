import {Frame} from "@nativescript/core";




export function tap(args) {
    Frame.getFrameById("main-page").navigate("test2")
    //Frame.topmost().navigate("test2")
}