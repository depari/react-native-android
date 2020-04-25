package com.example.android_app;

public class SharedData {
    private static SharedData instance = new SharedData();
    String data;

    public static SharedData getInstance(){
        return instance;
    }


    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }
}
