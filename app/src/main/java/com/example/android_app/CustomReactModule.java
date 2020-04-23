package com.example.android_app;

import android.app.Activity;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class CustomReactModule extends ReactContextBaseJavaModule {

    Activity mActivity;

    public CustomReactModule(ReactApplicationContext reactContext, Activity activity) {
        super(reactContext);
        mActivity = activity;
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomReactNativeModule";
    }
}
