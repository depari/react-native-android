package com.example.android_app;

import android.os.Bundle;
import android.view.KeyEvent;
import android.widget.LinearLayout;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

public class ReactNativeBaseActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    private LinearLayout ll;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        SoLoader.init(this, /* native exopackage */ false);

        setContentView(R.layout.react_layour);
        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setCurrentActivity(this)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("")
                .setJSBundleFile("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        //The name reactdemo should be the same as package.json and the project name in index.android.js in react-native, otherwise errors will occur.
        mReactRootView.startReactApplication(mReactInstanceManager, "react_native_app", null);
        ll= (LinearLayout) findViewById(R.id.ll_react);
        ll.addView(mReactRootView);

    }
    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(ReactNativeBaseActivity.this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(ReactNativeBaseActivity.this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}
