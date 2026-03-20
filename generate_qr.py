import qrcode
import os

# ⚠️ INGE UNGA NETLIFY LIVE URL AH PODAVUM
BASE_URL = "https://ai-treasure-hunt-round-2.netlify.app/"

tracks = ["A", "B", "C", "D"]
clues = ["2", "3", "4", "5", "final"]

# Create a folder to save images
os.makedirs("QR_Codes", exist_ok=True)

print("🚀 Generating QR Codes...")

for track in tracks:
    for clue in clues:
        # Create the specific URL for this clue
        url = f"{BASE_URL}/?track={track}&clue={clue}"
        
        # Generate QR
        qr = qrcode.QRCode(version=1, box_size=10, border=4)
        qr.add_data(url)
        qr.make(fit=True)
        
        img = qr.make_image(fill_color="black", back_color="white")
        
        # Save image with a clear name (e.g., Track_A_Clue_2.png)
        filename = f"QR_Codes/Track_{track}_Clue_{clue}.png"
        img.save(filename)
        print(f"✅ Saved: {filename}")

print("🎉 All 20 QR Codes generated successfully in the 'QR_Codes' folder!")