/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core'

const callback = (evt) => console.log(evt.eventName);
Application.android.on('activityCreated', callback);
Application.android.on('activityDestroyed', callback);
Application.android.on('saveActivityState', callback);
Application.android.on('activityStopped', callback);
Application.android.on('activityStarted', callback);

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
