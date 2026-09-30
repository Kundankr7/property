# Dynamic Map URL Generation - Examples

## How the Location Formatting Works

### Example 1: Kamothe Property
```
Input Location: "Sector 18, Kamothe"
Step 1 - Trim: "Sector 18, Kamothe"
Step 2 - Replace spaces with +: "Sector+18,+Kamothe"
Step 3 - Remove special chars: "Sector+18,+Kamothe" (no special chars)
Generated URL: https://www.google.com/maps?q=Sector+18,+Kamothe&output=embed
```

### Example 2: Panvel Project
```
Input Location: "Palaspe Junction, Palaspe Phata, Panvel"
Step 1 - Trim: "Palaspe Junction, Palaspe Phata, Panvel"
Step 2 - Replace spaces with +: "Palaspe+Junction,+Palaspe+Phata,+Panvel"
Step 3 - Remove special chars: "Palaspe+Junction,+Palaspe+Phata,+Panvel"
Generated URL: https://www.google.com/maps?q=Palaspe+Junction,+Palaspe+Phata,+Panvel&output=embed
```

### Example 3: Karanjade with Special Characters
```
Input Location: "Kalash CHS, Karanjade (Main Locality)"
Step 1 - Trim: "Kalash CHS, Karanjade (Main Locality)"
Step 2 - Replace spaces with +: "Kalash+CHS,+Karanjade+(Main+Locality)"
Step 3 - Remove special chars: "Kalash+CHS,+Karanjade+Main+Locality"
Generated URL: https://www.google.com/maps?q=Kalash+CHS,+Karanjade+Main+Locality&output=embed
```

---

## All Properties in Database - Maps Generated

### Resale Properties:
1. **1 BHK Kamothe Sector 18**
   - Location: "Sector 18, Kamothe"
   - URL: `https://www.google.com/maps?q=Sector+18,+Kamothe&output=embed`

2. **2 BHK Kamothe Sector 8**
   - Location: "Sector 8, Kamothe"
   - URL: `https://www.google.com/maps?q=Sector+8,+Kamothe&output=embed`

3. **1 BHK Kalash CHS Karanjade**
   - Location: "Karanjade"
   - URL: `https://www.google.com/maps?q=Karanjade&output=embed`

4. **Fully Furnished 1 BHK Kamothe**
   - Location: "Kamothe"
   - URL: `https://www.google.com/maps?q=Kamothe&output=embed`

5. **2 BHK Higher Floor Sector 21**
   - Location: "Sector 21, Kamothe"
   - URL: `https://www.google.com/maps?q=Sector+21,+Kamothe&output=embed`

### New Projects:
1. **Sai World City Panvel**
   - Location: "Palaspe Junction, Palaspe Phata, Panvel"
   - URL: `https://www.google.com/maps?q=Palaspe+Junction,+Palaspe+Phata,+Panvel&output=embed`

2. **Unimont Imperia Signature Tower**
   - Location: "Unimont Imperia"
   - URL: `https://www.google.com/maps?q=Unimont+Imperia&output=embed`

3. **Rudra Chapter 2**
   - Location: "Taloja"
   - URL: `https://www.google.com/maps?q=Taloja&output=embed`

4. **Landmaark Lifestyle (La Palacio)**
   - Location: "Kharghar/Panvel, Navi Mumbai"
   - URL: `https://www.google.com/maps?q=Kharghar/Panvel,+Navi+Mumbai&output=embed`

5. **Tejas Vaishnavi**
   - Location: "Kamothe"
   - URL: `https://www.google.com/maps?q=Kamothe&output=embed`

---

## No API Key Required ✓

The Google Maps embed URL works completely free without any API key. It's the standard public embed feature Google provides. No authentication, no billing, no rate limits.

---

## Testing Instructions

### Test 1: Verify Dynamic Map
1. Go to any property detail page
2. Scroll to "Location & Map" section
3. Verify the map shows the correct location for that property
4. Try different properties and verify each shows its own location

### Test 2: Verify Logo Display
1. Go to any property detail page
2. Look at the contact section (right sidebar)
3. Verify the company logo appears instead of "SB"
4. Check on mobile/tablet - logo should display properly

### Test 3: Check Responsiveness
1. Open property page on desktop - map should be 450px height
2. Open on mobile - map should be responsive
3. Logo should align properly with contact info on all sizes

### Test 4: Check Multiple Properties
- Property pages that should work:
  - `/property/kamothe-1bhk-sector-18`
  - `/property/sai-world-city-panvel`
  - `/property/rudra-chapter-2`
  - `/property/landmaark-lifestyle-navi-mumbai`
  - `/property/tejas-vaishnavi`
  - etc.

Each should show:
✓ Correct location map
✓ Company logo in contact section
✓ Proper responsive layout
