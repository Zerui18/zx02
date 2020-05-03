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
    }
  }
}