# Images Folder

This folder is for storing photographs, diagrams, and illustrations related to welding with TIG power source and coated electrodes.

## Recommended Structure

```
images/
├── equipment/              # Equipment photographs
│   ├── power-source.jpg    # Power source with settings
│   ├── control-panel.jpg   # Control panel
│   ├── electrode-holder.jpg
│   └── ground-clamp.jpg
│
├── setup/                  # Setup process
│   ├── vah-setting.jpg     # V-A curve setting
│   ├── current-setting.jpg
│   ├── hf-activation.jpg
│   └── polarity-check.jpg
│
├── electrodes/             # Electrodes
│   ├── lb52u-package.jpg
│   ├── electrode-tip-new.jpg
│   ├── electrode-tip-glazed.jpg  # Vitrified coating
│   └── electrode-sizes.jpg
│
├── technique/              # Welding technique
│   ├── arc-length.jpg      # Arc length demonstration
│   ├── electrode-angle.jpg
│   ├── hand-position.jpg
│   └── pulse-technique.jpg
│
├── welds/                  # Weld examples
│   ├── good-weld-1mm.jpg
│   ├── good-weld-1.5mm.jpg
│   ├── good-weld-2mm.jpg
│   ├── cross-section.jpg   # Weld cross-section
│   └── macro-structure.jpg
│
├── defects/                # Defects and problems
│   ├── burn-through.jpg    # Burn-through
│   ├── lack-of-fusion.jpg  # Lack of penetration
│   ├── excessive-spatter.jpg
│   ├── porosity.jpg
│   └── cracks.jpg
│
├── diagrams/               # Diagrams and charts
│   ├── vah-curves.png      # V-A curve graphs
│   ├── connection-diagram.png
│   ├── heat-input-graph.png
│   └── pulse-timing.png
│
└── safety/                 # Safety
    ├── ppe-full.jpg        # Full PPE set
    ├── welding-mask.jpg
    ├── gloves.jpg
    └── ventilation.jpg
```

## Photography Recommendations

### Technical Requirements

**Format:**
- Preferred: JPEG for photos, PNG for diagrams
- Resolution: minimum 1920x1080 pixels
- Quality: high, without lossy compression

**Lighting:**
- Good even lighting
- Avoid glare and shadows
- For welding arc: darken to see details

**Composition:**
- Clear focus on important details
- Minimal distracting elements
- Use ruler or coin for scale

### What to Photograph

#### 1. Equipment
- Power source with visible settings
- Control panel with close-up of parameters
- Electrode holder
- Ground placement

#### 2. V-A Curve Setup
- Screen or knobs with V/A value set
- Example of "flat" and "sloped" characteristics
- Power source settings menu

#### 3. Electrodes
- New LB52U electrode
- Vitrified tip after first ignition
- Comparison of different diameters
- Proper and improper tip sharpening (if applicable)

#### 4. Welding Technique
- Arc length (use arrows or markings)
- Electrode angle (with protractor or angle markings)
- Welder's hand position
- Intermittent technique (photo series)

#### 5. Quality Welds
- Welds on 1, 1.5, 2 mm metal
- Different joint types (butt, corner, T-joint)
- Weld cross-section showing penetration
- Macrostructure (after etching)

#### 6. Defects
- Burn-through
- Lack of penetration
- Excessive spatter
- Porosity
- Cracks
- Uneven bead

#### 7. Diagrams and Charts
- V-A curve graph (flat vs sloped)
- Equipment connection diagram
- Pulse and pause timing diagram
- Mode tables (in graphical form)

### Formatting Rules

**Photo Captions:**
```markdown
![Description](images/folder/file.jpg)
*Fig. X. Detailed description of what is shown*
```

**Markings on Photos:**
- Use arrows to indicate important details
- Add text labels (dimensions, parameters)
- Use contrasting colors (red, yellow on dark background)

**Scale:**
- Always include ruler or known object for scale
- Specify actual dimensions in description

## Image Copyrights

### Your Photos
If adding your own photographs:
- Ensure you have right to publish
- Photos must comply with repository license (CC BY-SA 4.0)
- Credit authorship in commit message

### Others' Images
If using images from other sources:
- Obtain author's permission
- Credit source and author
- Ensure license compatibility
- **DO NOT use images from commercial sites without permission**

## Photo Description Template

When adding photos, create description file:

```markdown
# Image Description

**File:** filename.jpg  
**Date:** DD.MM.YYYY  
**Author:** Your name or pseudonym  
**License:** CC BY-SA 4.0

## Shooting Parameters
- Camera/phone: _________
- Lighting: _________
- Processing: _________

## Description
Detailed description of what is shown in the photo.

## Welding Parameters (if applicable)
- Material: _________
- Thickness: _____ mm
- Electrode: LB52U _____ mm
- Current: _____ A
- V-A curve: _____ V/A
- Technique: _________

## Notes
Any additional comments, features, what to pay attention to.
```

## Examples of Good Photos

### Equipment Photos
✅ **Good:**
- Clear image of control panel
- All settings and indicators visible
- Good lighting
- Parameter values indicated

❌ **Bad:**
- Blurred image
- Screen glare
- Important details not visible
- No context

### Weld Photos
✅ **Good:**
- Weld cleaned of slag
- Structure and shape visible
- Ruler for scale included
- Welding parameters specified

❌ **Bad:**
- Weld covered in slag
- Poor lighting
- No scale
- Unknown parameters

## How to Add Images

1. **Create quality photos** per recommendations
2. **Optimize size** (no more than 2-3 MB per file)
3. **Name files meaningfully** (e.g., `weld-1mm-50A-good.jpg`)
4. **Place in appropriate folder**
5. **Add description** in markdown documents
6. **Create Pull Request** with description of added images

## Image Processing

### Allowed Processing
✅ Allowed:
- Cropping
- Brightness/contrast correction
- Adding arrows and labels
- Scaling (reduction only)
- Format conversion

❌ Not allowed:
- Significant color alteration
- Removing weld defects
- Montage/composition from multiple photos without indication
- Applying reality-distorting filters

### Recommended Tools

**Free:**
- GIMP (multifunctional editor)
- Paint.NET (simple editor for Windows)
- Inkscape (for vector diagrams)
- draw.io or diagrams.net (for diagrams)

**Online:**
- Photopea (Photoshop analog)
- Canva (for adding annotations)

## Contributing to Image Collection

We welcome contributions of quality photos and diagrams!

**Especially needed:**
- [ ] Photos of various TIG power sources with V-A curve settings
- [ ] Weld examples on different metal thicknesses
- [ ] Weld macrostructure (cross-sections)
- [ ] Various defects with cause indication
- [ ] Equipment connection diagrams
- [ ] Process diagrams (pulses, heat input)
- [ ] HF ignition process photos (if possible to capture)

**How to contribute:**
1. Take quality photos
2. Prepare description
3. Create Pull Request
4. Wait for review and publication

## Contacts

For image questions:
- Create Issue with "images" tag
- Describe what photos are needed
- Or suggest your photos

---

**Thank you for contributing to the project!**

Quality illustrations make documentation understandable and accessible to all skill levels.