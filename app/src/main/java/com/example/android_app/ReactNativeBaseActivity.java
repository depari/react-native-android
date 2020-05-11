package com.example.android_app;

import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.KeyEvent;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactlibrary.RnEventHandler;
import com.reactlibrary.RnEventMediatorModule;
import com.reactlibrary.RnEventMediatorPackage;


public class ReactNativeBaseActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler, ReactInstanceManager.ReactInstanceEventListener , RnEventHandler {
    private static final String TAG = "SSEO";

    private ReactRootView mReactRootView;
    private ReactContext mReactContext;
    private ReactInstanceManager mReactInstanceManager;
    private LinearLayout ll;
    String m_parameter_value;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        m_parameter_value = getIntent().getStringExtra("parameter");
        String text_title = getIntent().getStringExtra("parameter_title");
        Bundle props = new Bundle();
        props.putString("title", text_title);
        props.putString("body", m_parameter_value.toString());
        Log.d(TAG, "onCreate: passed parameter : " + m_parameter_value.toString() );

        SoLoader.init(this, /* native exopackage */ false);

        setContentView(R.layout.react_layour);
        mReactRootView = new ReactRootView(this);
        buildReactNative();
        mReactContext = mReactInstanceManager.getCurrentReactContext();


        new Handler().postDelayed(new Runnable() {// 1 초 후에 실행
            @Override
            public void run() {
                // 실행할 동작 코딩
                Log.d(TAG, "run: !!");
                mReactContext = mReactInstanceManager.getCurrentReactContext();
                tirggerEvent(mReactContext);
            }
        }, 5000);




        //The name reactdemo should be the same as package.json and the project name in index.android.js in react-native, otherwise errors will occur.
        mReactRootView.startReactApplication(mReactInstanceManager, "react_native_app", props);
        ll= (LinearLayout) findViewById(R.id.ll_react);
        ll.addView(mReactRootView);

    }

    private void buildReactNative() {
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setCurrentActivity(this)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("")
                .setJSBundleFile("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new RnEventMediatorPackage(this))
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();


        mReactInstanceManager.createReactContextInBackground();
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

    @Override
    public void onReactContextInitialized(ReactContext context) {
        Log.d(TAG, "onReactContextInitialized: ");
        mReactContext = context;
        tirggerEvent(mReactContext);


    }

    public void tirggerEvent(ReactContext _context) {
        Log.d(TAG, "tirggerEvent: " + m_parameter_value);


        if(_context == null)
        {
            Log.e(TAG, "context is null : " + m_parameter_value);
            _context = mReactInstanceManager.getCurrentReactContext();

            return;
        }
        _context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("customEvent", m_parameter_value);

    }


    @Override
    public void eventCallBack(int eventType, String eventKey, String eventData) {
        Log.d(TAG, "eventCallBack: key  " + eventKey + ", value: " + eventData);
        if(eventType == RnEventMediatorModule.EVENT_UPDATEDATA)
        {
            SharedData.getInstance().setData(eventData);
        }

    }
}
