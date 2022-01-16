import {Frame} from "@nativescript/core";




export function tap(args) {
    Frame.getFrameById("rootFrame").topm.navigate("test2") // IT ALWAYS WORK
    //Frame.topmost().navigate("test2")
}