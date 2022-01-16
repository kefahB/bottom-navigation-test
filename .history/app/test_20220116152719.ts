import {Frame} from "@nativescript/core";




export function tap(args) {
    Frame.getFrameById("rootFrame").navigate("test2") // IT ALWAYS WORK
    //Frame.topmost().navigate("test2")
}