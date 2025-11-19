# Equipment Setup

## Power Source Requirements

### Mandatory Characteristics

#### 1. Source Type
- **TIG welding power source** (GTAW)
- Inverter or transformer type
- Direct current (DC)

#### 2. Volt-Ampere Characteristic (V-A Curve)

**CRITICALLY IMPORTANT:** Power source must have **sloped V-A curve**

✅ **Suitable characteristics:**
- Adjustable sloped V-A curve: 0.5-2.0 V/A
- Optimal: 1.0-1.5 V/A
- Higher coefficient = softer arc

❌ **NOT suitable:**
- Constant current (flat) characteristic only
- Sources without V-A curve adjustment
- Characteristics with coefficient <0.5 V/A

**How to check:**
- Study the power source user manual
- Look for parameters: "slope", "droop", "V/A"
- Some machines label this as "inductance"

#### 3. High-Frequency Ignition (HF Start)

**Mandatory feature:**
- Oscillator for contactless arc ignition
- Operating mode: "Start Only" (pulses only during ignition)
- Frequency: typically 150-500 kHz
- Amplitude: 2000-6000 V

**HF Modes:**
- ✅ "HF Start" or "Start Only" - pulses only at start
- ⚠️ "Continuous HF" - constant pulses (may work but less reliable)
- ❌ Without HF - method not applicable

#### 4. Current Range

For thin metal welding:
- Minimum current: from 20-30 A
- Maximum current: up to 80-100 A (sufficient)
- Smooth current adjustment

#### 5. Open Circuit Voltage

- Standard for TIG: 50-90 V
- Sufficient for arc ignition through coating

### Additional Useful Features

**Desirable to have:**
- Pre-flow time adjustment
- Post-flow time adjustment
- Down slope (current ramp-down)
- Foot pedal or button for current control

**Can work without:**
- Pulse mode
- AC mode for aluminum
- Hot start (compensated by HF)

## Electrode Selection

### Recommended Electrodes

**Type:** LB52U or equivalent
- Coating: basic (lime-type)
- Application: low-alloy and high-strength steels
- Standard: typically complies with AWS E7018 or equivalents

**Electrode diameter based on metal thickness:**

| Metal Thickness | Electrode Diameter | Note |
|-----------------|-------------------|------|
| 1.0 mm | 2.0 mm | Minimum diameter |
| 1.5 mm | 2.0-2.5 mm | Optimal choice |
| 2.0 mm | 2.5 mm | Standard |
| 2.5+ mm | 3.0 mm | If necessary |

⚠️ **Important:** Do not use electrodes larger than 3 mm for thin metal!

### Electrode Quality Requirements

1. **Storage**
   - Dry location
   - Temperature above dew point
   - Original packaging until use

2. **Baking (if required)**
   - According to manufacturer's instructions
   - Typically: 300-350°C, 1-2 hours
   - Storage in electrode oven at 80-100°C

3. **Coating Condition**
   - No cracks or chips
   - Uniform coating
   - No moisture traces

## Power Source Setup

### Step 1: Operating Mode Selection

1. **Turn on the power source**
2. **Select TIG (DC) mode**
   - Direct current
   - GTAW mode
3. **Activate high-frequency ignition**
   - Set "HF Start" or "Start Only"
   - DO NOT use "Lift TIG" or "Scratch Start"

### Step 2: V-A Curve Adjustment

**Setting slope characteristic:**

1. Find the parameter:
   - "Slope" (droop)
   - "Inductance"
   - "V/A" or similar

2. **Set value: 1.0-1.5 V/A**
   - Start with 1.2 V/A
   - If arc is unstable - increase to 1.5 V/A
   - If excessive spatter - reduce to 1.0 V/A

**V-A Curve Selection Table:**

| V/A Coefficient | Arc Character | Application |
|-----------------|---------------|-------------|
| 0.5-0.8 | Stiffer | Experienced welders, thickness >1.5 mm |
| 1.0-1.2 | Balanced | Universal choice |
| 1.3-1.5 | Soft | Beginners, thickness <1.5 mm |
| 1.6-2.0 | Very soft | Extra thin metal |

### Step 3: Working Current Setting

**Initial values:**

Formula: **I (A) ≈ 30 × d (mm)**

where d = electrode diameter

| Electrode Diameter | Initial Current | Adjustment Range |
|-------------------|-----------------|------------------|
| 2.0 mm | 50-60 A | 40-70 A |
| 2.5 mm | 60-70 A | 50-80 A |
| 3.0 mm | 70-80 A | 60-90 A |

**Adjustment by metal thickness:**

| Metal Thickness | Current Adjustment |
|-----------------|-------------------|
| 1.0 mm | -10...15 A from base |
| 1.5 mm | -5...10 A from base |
| 2.0 mm | Base value |
| 2.5+ mm | +5...10 A from base |

### Step 4: Polarity Setting

**For LB52U type electrodes:**
- ✅ **Reverse polarity (DCEP)**
  - Electrode holder on "+" (positive)
  - Ground on "-" (negative)

**Check:** Most TIG power sources have standard straight polarity (electrode negative). For coated electrode work **reverse the polarity**.

### Step 5: Additional Parameters

**Pre-Flow (gas pre-flow):**
- Set minimum value or 0 sec
- Gas shielding not used

**Post-Flow (post-weld purge):**
- Set minimum value or 0 sec

**Down Slope (current ramp-down):**
- Set minimum value or 0 sec
- Not required for intermittent welding

## Workplace Preparation

### Equipment and Tools

**Mandatory:**
1. Welding power source (configured per above instructions)
2. Electrode holder for SMAW
3. Ground cable
4. LB52U electrodes of appropriate diameter
5. Personal protective equipment (see "Safety" section)

**Recommended:**
1. Metal samples for test welds
2. Wire brush for cleaning
3. Chipping hammer for slag removal
4. Sandpaper or file for electrode cleaning
5. Measuring tools (calipers, ruler)

### Part Preparation

1. **Surface Cleaning**
   - Remove scale, rust, paint
   - Clean 20-30 mm width from weld
   - Degrease with acetone or solvent

2. **Assembly and Tack Welds**
   - Minimum gaps (0-0.5 mm)
   - Tack welds every 20-30 mm
   - Tack length: 5-10 mm

3. **Part Fixturing**
   - Use clamps or fixtures
   - Ensure free access to weld area
   - Provide for heat dissipation (backing strips)

### Ground Placement

**Critical for arc stability!**

✅ **Correct placement:**
- As close as possible to weld area
- Reliable electrical contact
- Clean surface at attachment point

❌ **Incorrect placement:**
- Far from weld area
- Through intermediate parts
- On painted or oxidized surface

**Magnetic blow problem:**
- Can occur due to improper ground placement
- Arc "blows" to one side
- Solution: relocate ground to opposite side of weld

## Initial Power-Up and Testing

### Pre-Weld Checklist

- [ ] Power source configured per instructions
- [ ] V-A curve set in 1.0-1.5 V/A range
- [ ] High-frequency ignition activated
- [ ] Reverse polarity (electrode on "+")
- [ ] Current set per table
- [ ] Ground securely attached close to weld area
- [ ] Electrodes dry, undamaged
- [ ] Protective equipment worn
- [ ] Test samples prepared

### Test Ignition

1. **Prepare metal sample**
   - Thickness matches working parts
   - Clean surface

2. **First ignition**
   - Bring electrode to 3-5 mm distance
   - Activate HF ignition (usually automatic when button pressed)
   - Arc should ignite without contact

3. **Arc quality assessment**
   - Sound: smooth, hissing
   - Color: bright white in center
   - Stability: minimal fluctuations
   - Spatter: minimal

4. **Re-ignition test**
   - Break the arc
   - Let electrode cool 1-2 seconds
   - Re-ignite through vitrified coating
   - Should work without problems

### Signs of Proper Setup

✅ **All good:**
- Arc ignites easily and quickly
- Burns smoothly, without crackling
- Re-ignition works through vitrified coating
- Electrode doesn't stick
- Minimal spatter

❌ **Requires adjustment:**
- Arc crackles and "spits" → increase V-A curve slope
- Frequent sticking → increase V-A curve slope or current
- Won't re-ignite → check HF ignition
- Excessive spatter → decrease current or V-A curve slope
- Burn-through → decrease current

## Fine Tuning for Specific Applications

### For Different Metal Thicknesses

**1.0 mm metal:**
- Current: 10-15 A below base
- V-A curve: 1.3-1.5 V/A (softer)
- Technique: short pulses with pauses

**1.5 mm metal:**
- Current: 5-10 A below base
- V-A curve: 1.2-1.4 V/A (standard)
- Technique: medium duration pulses

**2.0 mm metal:**
- Current: base value
- V-A curve: 1.0-1.2 V/A (can be stiffer)
- Technique: continuous welding possible

### For Different Joint Types

**Butt joint:**
- Minimum gap
- Current: base
- Thorough tack welding

**Corner joint:**
- Current: +5-10 A from base
- Direction: upward preferred

**T-joint:**
- Current: +10 A from base
- Electrode angle: 45° to both parts

**Lap joint:**
- Current: base or +5 A
- Arc direction: predominantly on lower part

## Equipment Maintenance

### Regular Checks

**Before each shift:**
- Check cables for damage
- Clean electrode holder
- Verify ground connection reliability

**Weekly:**
- Clean power source ventilation openings
- Check all connection tightness
- Check HF ignition operation

**Monthly:**
- Check cable insulation with megger
- Check current calibration (if possible)

### Malfunction Signs

⚠️ **Contact specialist if:**
- HF ignition not working or unstable
- Power source overheats
- Smell of burning or smoke
- Current not adjusting
- Frequent protection trips

## Safety

### Personal Protective Equipment

**Mandatory:**
1. Welding helmet with shade DIN 9-11
2. Welding gloves (gauntlets)
3. Protective clothing from non-flammable material
4. Closed-toe shoes with rubber soles

**Recommended:**
1. Respirator (basic-coated electrodes produce heavy fumes)
2. Safety glasses under helmet
3. Apron from non-flammable material

### Electrical Safety

⚠️ **DANGER:**
- High-frequency pulses can be dangerous for people with pacemakers
- Do not touch electrode and parts under voltage
- Work in dielectric gloves when humid

**Rules:**
- Power source grounding mandatory
- Use serviceable cables
- Do not work in rain or puddles
- Insulate yourself from ground (rubber mat)

### Fire Safety

**Requirements:**
- Fire extinguisher within reach
- Remove flammable materials 5 m away
- Spark-arresting screens if necessary
- Monitor sparks and metal spatter

### Ventilation

**Mandatory:**
- Natural or forced ventilation
- LB52U electrodes emit toxic fumes
- Especially critical in confined spaces
- Use exhaust or respirator

---

**Next step:** After equipment setup, proceed to [Welding Parameters](welding_params.md) section to study specific operating modes.