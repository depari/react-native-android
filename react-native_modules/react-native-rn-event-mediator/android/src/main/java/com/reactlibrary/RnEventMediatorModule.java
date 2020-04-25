package com.reactlibrary;

import android.util.Log;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.HashMap;
import java.util.Map;

public class RnEventMediatorModule extends ReactContextBaseJavaModule {
    String TAG = "SSEO_RnEventMediatorModule";
    RnEventHandler mEventhandler;
    private final ReactApplicationContext reactContext;

    private static final String EVENT_NORMAL_STRING = "NORMAL";
    private static final String EVENT_UPDATEDATA_STRING = "UPDATE_DATA";
    public static final int EVENT_NORMAL = 0;
    public static final int EVENT_UPDATEDATA = 1;

    public RnEventMediatorModule(ReactApplicationContext reactContext, RnEventHandler handler) {
        super(reactContext);
        this.reactContext = reactContext;
        this.mEventhandler = handler;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(EVENT_NORMAL_STRING, EVENT_NORMAL);
        constants.put(EVENT_UPDATEDATA_STRING, EVENT_UPDATEDATA);
        return constants;
    }

    @Override
    public String getName() {
        return "RnEventMediator";
    }

    @ReactMethod
    public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
        // TODO: Implement some actually useful functionality
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @ReactMethod
    public void toast(String message) {
        Log.d(TAG, "New !! show: Invoked!!! ");

        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();

    }

    @ReactMethod
    public void sendEvent(int type, String key,String value) {
        Log.d(TAG, "sendEvent ");
        mEventhandler.eventCallBack(type, key, value);
    }




}
