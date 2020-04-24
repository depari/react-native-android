package com.reactlibrary;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class EventMediatorModuleModule extends ReactContextBaseJavaModule {
    String TAG = "SSEO";

    private final ReactApplicationContext reactContext;

    public EventMediatorModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "EventMediatorModule";
    }

    @ReactMethod
    public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
        // TODO: Implement some actually useful functionality
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @ReactMethod
    public void show(String message) {
        Log.d(TAG, "show: Invoked!!! ");

        Toast.makeText(getReactApplicationContext(), message, 1000).show();
    }
}
