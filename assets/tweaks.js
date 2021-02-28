const TWEAKS = [
  {
    name : "Frame",
    description : "Bring your iDevice to life with your favourite video wallpapers!",
    version : "2.4.2",
    id : "frame",
    details : {
      subtitle : "Feature-complete Video Wallpaper",
      packages : [
        {
          minOSVersion : [14, 0, 0],
          id : "com.zx02.frame.ios14"
        },
        {
          minOSVersion : [12, 2, 0],
          id : "com.zx02.frame"
        },
        {
          minOSVersion : [11, 0, 0],
          id : "com.zx02.frame.legacy"
        }
      ],
      miscs : [
        "v2.4.1", "iOS 11-14"
      ],
      embedVideoURL : "https://streamable.com/s/djfvt/nustqr",
      nScreenshots : 5,
      descriptions : [
        {
          title : "Importatant",
          html : "If your iOS 14 device runs arm64e (A12 or later), please use the Frame (arm64e-iOS14) package, otherwise devices on iOS 12.2 or above should \
          use the Frame package, while devices from iOS 11 and below iOS 12.2 should use the Frame (Legacy) package."
        },
        {
          title : "Description",
          html : "Ever wanted to see your favourite character/landscape live on your wallpaper? <br><br>\
          Frame introduces video wallpapers with a comprehensive feature set to iOS. It's reliable and simple to use - with a few taps, you'll be all set.<br>"
        },
        {
          title : "Setup",
          html : "1. Install <br><br>\
          2. Settings > Frame > Choose Wallpapers <br><br>\
          3. Enjoy! <br>"
        },
        {
          title : "Features",
          html : "1. Setting <b>different</b> video wallpapers for the lock screen and home screen, each with a separate mute control. <br><br>\
          2. Built-in video wallpaper <b>catalogue</b> that offers hundreds of HQ vertical video wallpapers at your fingertip. <br><br>\
          3. Intelligent <b>playback management</b> that only plays the video when you're seeing it, thus conserving battery. <br><br>\
          4. Automatically <b>fade</b> your icons and status bar after a configurable period of inactivity. <br><br>\
          5. Alternative CLI <b>framecli</b> for those who would like to use Frame with automated scripts. <br><br>\
          6. Automatic <b>Low Power Mode</b> integration that deactivates Frame when LPM is on and reactivates it when LPM is off."
        },
        {
          title : "Tips",
          html : "1. If you would like to set the same video for both home and lock screen, try setting the same system wallpaper to both screens. It will give the effect where the wallpaper does not get lifted with the lock screen. <br><br>\
          2. The downloaded video(s) & current video(s) can be found under <b>/var/mobile/Documents/com.ZX02.Frame</b> ."
        }
      ]
    }
  }
]