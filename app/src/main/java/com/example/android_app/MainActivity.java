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

public class MainActivity extends AppCompatActivity {

    Button btn_react;
    TextInputEditText textinput;
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

                String text = textinput.getText().toString();
                Log.d("SSEO", "onClick: "+ text);


                Intent _intent = new Intent(MainActivity.this,ReactNativeBaseActivity.class);
                _intent.putExtra("parameter", text.toString());
                startActivity(_intent);
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

}
