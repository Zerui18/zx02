const HELP = {
  frame : {
    resAccess : {
      title : "Frame",
      subtitle : "Inaccessible Resource Folder",
      content : [
        "This error is raised whenever Frame detects that it's unable to read/write to its resource folder. This will lead to video wallpapers unable to be applied.",
        "To fix this, please use a jailbroken (unsandboxed) file explorer of your choice and visit '/var/mobile/Documents'.",
        "!./assets/screenshots/frame/help_resAccess0.jpg",
        "Ensure that there is a folder with the exact name 'com.ZX02.Frame', if not please create it.",
        "!./assets/screenshots/frame/help_resAccess1.jpg",
        "Also, ensure that all parties are given read, write, execute permissions (accessible via the 'i' button for Filza).",
        "To verify that this problem has been resolved, go into Settings: exit the Frame tab if you've opened Frame's settings. Enter Frame's settings and verify that the error is not shown."
      ]
    },
    sysConfig: {
      title : "Frame",
      subtitle : "System Config Mismatch",
      content : [
        "This warning is shown whenever Frame detects that glitches would occur due to your current system wallpaper configurations.",
        "To fix this, please set different system wallpapers for your lock screen and home screen.",
        "<b>Tips</b>",
        "If this warning appears despite you having the same video wallpaper set for the lock screen and home screen, it's likely that you didn't set them together using the setBoth option.",
        "It would then be recommended that you reset both your video wallpapers using the setBoth option, or performance penalty would result as Frame would treat them as 2 different video wallpapers."
      ]
    }
  }
}