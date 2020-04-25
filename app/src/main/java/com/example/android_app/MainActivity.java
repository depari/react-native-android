package com.example.android_app;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

import com.facebook.soloader.SoLoader;
import com.google.android.material.textfield.TextInputEditText;
import com.reactlibrary.RnEventHandler;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "SSEO";

    Button btn_react;
    TextInputEditText textinput;
    TextInputEditText textinput_title;

    //TextInput
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SoLoader.init(this, /* native exopackage */ false);
        setContentView(R.layout.activity_main);
        btn_react = findViewById(R.id.button_react);
        btn_react.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                if (Build.VERSION.SDK_INT>=23){
                    if (!Settings.canDrawOverlays(MainActivity.this)){
                        startActivity(new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION));
                        return;
                    }else{

                    }
                }else{
                    //Draw UI code, where the system below Android 6.0 can be drawn directly.
                }

                textinput = findViewById(R.id.id_input_text);
                textinput_title = findViewById(R.id.id_input_text_title);

                String text = textinput.getText().toString();
                String text_title = textinput_title.getText().toString();
                Log.d(TAG, "onClick - Title: "+ text_title +" Event:" + text);


                Intent _intent = new Intent(MainActivity.this,ReactNativeBaseActivity.class);
                _intent.putExtra("parameter", text.toString());
                _intent.putExtra("parameter_title", text_title.toString());

                startActivity(_intent);
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
    }


}
