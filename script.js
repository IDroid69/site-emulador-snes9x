// ... dentro da função handleFile ...
if (netplayToggle.checked) {
    window.EJS_netplay = true; // Ativa o modo netplay explicitamente
    window.EJS_netplayUrl = 'wss://netplay.emulatorjs.org'; 
    window.EJS_netplayRoom = roomName;
    window.EJS_netplayNickname = nickname;
    window.EJS_oldCores = true; 
}