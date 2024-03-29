package com.superleitorapp;


import android.app.Application;
import android.util.Log;
import com.sbugert.rnadmob.RNAdMobPackage;

import com.oblador.vectoricons.VectorIconsPackage;

import io.realm.react.RealmReactPackage;

import com.BV.LinearGradient.LinearGradientPackage;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

import com.github.yamill.orientation.OrientationPackage;

import com.remobile.splashscreen.RCTSplashScreenPackage;

import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
     return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNAdMobPackage(),
          new RCTSplashScreenPackage(MainActivity.activity),
          new FBSDKPackage(mCallbackManager),
          new OrientationPackage(MainActivity.activity),
          new VectorIconsPackage(),
          new RealmReactPackage(),
          new LinearGradientPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    FacebookSdk.sdkInitialize(getApplicationContext());
    SoLoader.init(this, /* native exopackage */ false);
    // If you want to use AppEventsLogger to log events.
    AppEventsLogger.activateApp(this);
  }
}
