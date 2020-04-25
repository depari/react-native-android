package com.reactlibrary;

import java.util.Dictionary;
import java.util.Set;

public interface RnEventHandler {
    public abstract void eventCallBack(int eventType, String eventKey, String eventData);
}
