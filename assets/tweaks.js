const TWEAKS = [
  {
    name : "XenLive",
    description : "Live editing of XenHTML Widgets on your device from a PC.",
    version : "1.1.0",
    id : "xenlive",
    details : {
      subtitle : "Hot-reloading Widget Editor",
      packages : [
        {
          minOSVersion : [12, 0, 0],
          id : "com.zx02.xenlive"
        }
      ],
      miscs : [
        "v1.1.0", "iOS 12-14"
      ],
      embedVideoURL : "",
      nScreenshots : 0,
      descriptions : [
        {
          title : "Installation",
          html : "Please install the xenlive tweak onto your iOS device, and the accompanying xenlive-edit extension on VSCode. More instructions on setting up the VSCode extension can be found on its page in VSCode extensions."
        },
      ]
    }
  },
  {
    name : "Frame",
    description : "Bring your iDevice to life with your favourite video wallpapers!",
    version : "3.0.0",
    id : "frame",
    details : {
      subtitle : "Feature-complete Video Wallpaper",
      packages : [
        {
          minOSVersion : [13, 0, 0],
          id : "com.zx02.frame"
        }
      ],
      miscs : [
        "v3.0.0", "iOS 13-14"
      ],
      embedVideoURL : "",
      nScreenshots : 6,
      descriptions : [
        {
          title : "Description",
          html : "Ever wanted to see your favourite character/landscape live on your wallpaper? <br><br>\
          Frame introduces video wallpapers with a comprehensive feature set to iOS. It's reliable and simple to use - with a few taps, you'll be all set.<br>"
        },
        {
          title : "Setup",
          html : "1. Install the package <br><br>\
          2. Open the Frame app on Homescreen > Download Video > Choose Video <br><br>\
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
          2. The downloaded video(s) & current video(s) can be found under <b>/var/mobile/Documents/com.zx02/frame/videos/</b> ."
        }
      ]
    }
  }
]