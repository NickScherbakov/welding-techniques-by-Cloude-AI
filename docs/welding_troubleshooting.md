# Troubleshooting

This section will help diagnose and resolve the most common problems when using a TIG power source with coated electrodes.

## Problem Classification

### 🔴 Critical Problems (welding impossible)
- Arc won't ignite
- Constant electrode sticking
- Power source not working or overheating

### 🟠 Serious Problems (low quality)
- Metal burn-through
- Lack of penetration
- Strong magnetic blow
- Excessive spatter

### 🟡 Moderate Problems (adjustment required)
- Unstable arc
- Uneven bead
- Poor slag removal
- Periodic sticking

## Arc Ignition Problems

### Problem 1: Arc won't ignite at all

**Symptoms:**
- Nothing happens when bringing electrode close
- No characteristic sound from HF oscillator
- No spark or corona

**Possible causes and solutions:**

#### Cause A: HF ignition not activated

**Diagnosis:**
- Check power source settings
- Ensure "HF Start" or "Start Only" mode selected
- Listen for high-frequency beep when pressing button

**Solution:**
1. Enter power source settings menu
2. Find "HF" or "Start Mode" parameter
3. Set "HF Start" or "Start Only"
4. Save settings
5. Try again

#### Cause B: Oscillator malfunction

**Diagnosis:**
- HF activated in settings but no sound
- No discharge when bringing electrode 2-3 mm from workpiece

**Solution:**
1. Check fuses in oscillator circuit (see manual)
2. Check high-voltage wire connections
3. If unsuccessful - contact repair specialist

#### Cause C: Insufficient open circuit voltage

**Diagnosis:**
- HF working (beep audible)
- But arc won't ignite even at small distance (1-2 mm)

**Solution:**
1. Measure open circuit voltage (should be 50-80 V)
2. If below 50 V - possible power source malfunction
3. Contact specialist

#### Cause D: Poor ground contact

**Diagnosis:**
- HF working
- Arc momentarily ignites and extinguishes

**Solution:**
1. Check ground clamp security
2. Clean contact point to bare metal
3. Ensure no oxides or paint
4. Move ground closer to weld area
5. Check ground cable integrity

#### Cause E: Too thick vitrified coating

**Diagnosis:**
- First ignition works
- Re-ignition doesn't work, even with HF

**Solution:**
1. Lightly tap electrode tip with hammer
2. Or clean with sandpaper
3. Or break off last 2-3 mm of electrode
4. In future, use shorter pauses between pulses

### Problem 2: Arc ignites but immediately extinguishes

**Symptoms:**
- Arc flashes for a fraction of a second
- Immediately extinguishes even when approaching electrode


**Possible causes and solutions:**

#### Cause A: Current too low

**Solution:**
- Increase current by 10-20 A
- Minimum current for 2 mm electrode: 40 A
- Minimum current for 2.5 mm electrode: 50 A

#### Cause B: V-A curve too stiff

**Solution:**
- Increase slope coefficient to 1.5-2.0 V/A
- Softer characteristic will make it easier to maintain arc

#### Cause C: Wet electrodes

**Diagnosis:**
- Electrodes stored in damp location
- Coating flakes off easily

**Solution:**
- Use baked electrodes
- Baking temperature for LB52U: 300-350°C, 1-2 hours
- Store in electrode oven at 80-100°C

### Problem 3: Arc ignites but very unstable

**Symptoms:**
- Arc "jumps", crackles
- Lots of sparks and spatter
- Uneven sound

**See section "Arc Stability Problems" for solutions**

## Electrode Sticking Problems

### Problem 4: Constant sticking with slightest approach

**Symptoms:**
- Electrode sticks to workpiece when approaching
- Impossible to maintain short arc

**Possible causes and solutions:**

#### Cause A: V-A curve too stiff

**This is the most likely cause!**

**Solution:**
1. Increase V-A curve slope coefficient
2. Start with 1.5 V/A
3. Increase to 2.0 V/A if needed
4. Softer characteristic will prevent short circuits

#### Cause B: Insufficient current

**Solution:**
- Increase current by 10-15 A
- Higher current will make it easier to maintain arc

#### Cause C: Arc too short

**Solution:**
- Increase arc length to 2-3 mm
- Can reduce to 1-2 mm after mastering technique

### Problem 5: Periodic sticking

**Symptoms:**
- Electrode sticks sometimes
- More often when reducing arc length

**Solution:**
- Maintain more stable arc length
- Don't let electrode touch weld pool
- Slightly increase V-A curve coefficient (by 0.2-0.3 V/A)

### What to do if electrode sticks:

1. **DO NOT pull hard** - can damage coating
2. **Quickly move electrode holder aside** - sometimes electrode breaks free
3. **If that doesn't help:**
   - Quickly release holder
   - Free electrode
   - Turn off power source
   - Unscrew electrode from workpiece
4. **Clean electrode tip** before continuing work

## Arc Stability Problems

### Problem 6: Arc unstable, crackles, "spits"

**Symptoms:**
- Uneven sound (crackling instead of hissing)
- Lots of sparks and spatter
- Arc "jumps"

**Possible causes and solutions:**

#### Cause A: Arc too long

**Solution:**
- Reduce arc length to 1-2 mm
- Hold electrode closer to workpiece

#### Cause B: V-A curve too stiff

**Solution:**
- Increase slope coefficient to 1.3-1.5 V/A

#### Cause C: Magnetic blow

**Diagnosis:**
- Arc deflects to one side
- Deflection always in same direction

**Solution:**
1. Move ground to opposite side of weld
2. Or to other end of workpiece
3. Change electrode angle
4. Reduce arc length to minimum
5. Demagnetize workpiece if magnetized

#### Cause D: Poor electrode quality

**Diagnosis:**
- Coating with cracks or chips
- Electrodes dampened
- Coating flakes off

**Solution:**
- Use quality dry electrodes
- Bake electrodes before use
- Store in dry location

#### Cause E: Power source instability

**Diagnosis:**
- Arc unstable even with all correct settings
- Current "floats"

**Solution:**
- Check supply network (voltage should be stable)
- Check reliability of all connections
- Possible power source malfunction - contact specialist

### Problem 7: Arc deflects to side (magnetic blow)

**Symptoms:**
- Arc clearly deflects from vertical
- Weld pool asymmetric
- Spatter flies predominantly in one direction

**Causes:**
- Magnetic field from welding current
- Incorrect ground placement
- Workpiece magnetized
- Proximity of ferromagnetic masses

**Solutions:**

**1. Ground relocation:**
- Move ground to opposite side
- Or to opposite end of workpiece
- Arc will deflect toward ground

**2. Change welding direction:**
- Weld in opposite direction
- Arc will deflect backward, which is less critical

**3. Reduce arc length:**
- Short arc (1-2 mm) less susceptible to deflection

**4. Change electrode angle:**
- Tilt electrode against arc deflection direction

**5. Demagnetize workpiece:**
- Use special demagnetizing equipment
- Or heat and cool workpiece (reduces residual magnetism)

**6. Increase current:**
- More powerful arc less susceptible to deflection

## Weld Quality Problems

### Problem 8: Metal burn-through

**Symptoms:**
- Through-holes in metal
- Weld pool collapse
- Uncontrolled metal flow

**Possible causes and solutions:**

#### Cause A: Excessive current

**Solution:**
1. Reduce current by 10-20 A
2. For 1 mm metal start with 30-40 A
3. Don't exceed recommended values from tables

#### Cause B: Welding too slow

**Solution:**
- Increase electrode travel speed
- Don't linger in one spot

#### Cause C: Long pulses without pauses

**Solution:**
- Use intermittent technique
- Reduce pulse duration to 0.5-1 sec
- Increase pauses to 1-1.5 sec
- Let metal cool between pulses

#### Cause D: Gap between parts too large

**Solution:**
- Minimize gap (0-0.3 mm for 1-1.5 mm thickness)
- Make more frequent tack welds
- Use backing for large gaps

#### Cause E: Contamination on metal

**Solution:**
- Thoroughly clean weld areas
- Remove paint, scale, oil
- Degrease with acetone or solvent

### Problem 9: Lack of penetration

**Symptoms:**
- Weak joint
- Convex weld
- Edge non-fusion
- Weld easily breaks off

**Possible causes and solutions:**

#### Cause A: Insufficient current

**Solution:**
- Increase current by 10-20 A
- Check current matches electrode diameter

#### Cause B: Welding too fast

**Solution:**
- Reduce travel speed
- Increase pulse duration
- Watch weld pool formation

#### Cause C: Arc too long

**Solution:**
- Reduce arc length to 1-2 mm
- Hold electrode closer to workpiece

#### Cause D: Poor edge preparation

**Solution:**
- Clean edges to shine
- Remove oxides, rust
- Bevel edges at angle for thickness >2 mm

#### Cause E: Gap too large

**Solution:**
- Reduce gap between parts
- Use more frequent tack welds
- Increase current for large gaps

### Problem 10: Excessive metal spatter

**Symptoms:**
- Heavy spatter around weld
- Metal loss
- Part contamination

**Possible causes and solutions:**

#### Cause A: Arc too long

**Solution:**
- Reduce arc length to 1-2 mm
- This is the most common cause of spatter

#### Cause B: Excessive current

**Solution:**
- Reduce current by 5-10 A
- Find optimal value

#### Cause C: V-A curve too stiff

**Solution:**
- Increase slope coefficient to 1.3-1.5 V/A

#### Cause D: Wet electrodes

**Solution:**
- Use dry baked electrodes
- Store in electrode oven

#### Cause E: Metal contamination

**Solution:**
- Thoroughly clean and degrease surface
- Especially critical for thin metal

### Problem 11: Poor slag removal

**Symptoms:**
- Slag won't detach or detaches with difficulty
- Slag inclusions remain in metal
- Uneven weld surface under slag

**Possible causes and solutions:**

#### Cause A: Insufficient current

**Solution:**
- Increase current by 10-15 A
- At low current slag "bakes on" to metal

#### Cause B: Wet electrodes

**Solution:**
- Bake electrodes per instructions
- Store in dry location or electrode oven
- Wet LB52U electrodes give very poor slag removal

#### Cause C: Too rapid cooling

**Solution:**
- Let weld cool naturally
- Don't force-cool with water or air
- Slag detaches easier after complete cooling

#### Cause D: Incorrect welding mode

**Solution:**
- Check all parameters: current, V-A curve, arc length
- Slag is indicator of correct mode
- Easily removing slag = correct mode

### Problem 12: Porosity in weld metal

**Symptoms:**
- Visible holes on surface or weld fracture
- Joint weakening

**Possible causes and solutions:**

#### Cause A: Wet electrodes

**Solution:**
- Mandatory baking of LB52U electrodes
- Storage in electrode oven
- Don't use electrodes exposed >4 hours in humid environment

#### Cause B: Metal contamination

**Solution:**
- Thorough cleaning
- Special attention: oil, paint, rust
- Degreasing mandatory

#### Cause C: Arc too long

**Solution:**
- Reduce arc length
- Air enters weld zone with long arc

#### Cause D: High welding speed

**Solution:**
- Slow down travel
- Gases must have time to escape from pool

### Problem 13: Weld cracks

**Symptoms:**
- Visible cracks in or near weld
- Appear immediately or after cooling

**Possible causes and solutions:**

#### Cause A: Rigid part fixturing

**Solution:**
- Allow for thermal deformation
- Don't clamp parts too rigidly
- Welding sequence: from center to edges

#### Cause B: Too rapid cooling

**Solution:**
- Natural cooling
- Don't cool with water or compressed air
- Cover thick parts to slow cooling

#### Cause C: Material incompatibility

**Solution:**
- Ensure LB52U electrodes suitable for base metal
- Check steel grade
- Use preheat if necessary

#### Cause D: High carbon content in metal

**Solution:**
- Preheat to 150-200°C
- Slow cooling
- May require different electrodes

## Equipment Problems

### Problem 14: Power source overheats and shuts down

**Symptoms:**
- Thermal protection trips
- Power source shuts down after several minutes
- Overheat indicator lit

**Possible causes and solutions:**

#### Cause A: Exceeding duty cycle

**Diagnosis:**
- Check power source duty cycle at current used
- Example: 60% duty cycle at 100A means 6 minutes work, 4 minutes pause

**Solution:**
- Follow work mode per duty cycle
- Take breaks
- If continuous work needed - use lower current
- Or choose power source with higher duty cycle

#### Cause B: Poor power source ventilation

**Solution:**
1. Check that ventilation openings not blocked
2. Clean internal dust (compressed air, power off)
3. Ensure free space around power source (minimum 30 cm)
4. Don't work in sun or hot room

#### Cause C: Cooling system malfunction

**Solution:**
- Check fan operation
- Contact specialist if needed

### Problem 15: HF ignition works unstably

**Symptoms:**
- Sometimes ignites, sometimes doesn't
- Weak sparks
- Quiet or absent oscillator sound

**Possible causes and solutions:**

#### Cause A: Poor contact in HF circuit

**Solution:**
1. Check high-voltage wire connections
2. Tighten screw connections
3. Check for oxides on contacts

#### Cause B: Oscillator capacitor wear

**Solution:**
- Contact specialist for capacitor replacement

#### Cause C: Weak high-voltage pulses

**Solution:**
- Possible oscillator transformer malfunction
- Requires qualified repair

### Problem 16: Current doesn't match setting

**Symptoms:**
- Actual current differs from panel reading
- Welding result doesn't match expected

**Solution:**
1. Check power source calibration (see manual)
2. Measure actual current with clamp meter
3. Perform calibration or contact specialist if needed
4. Temporary solution: adjust current setting by result

## Welding Technique Problems

### Problem 17: Uneven weld

**Symptoms:**
- Weld alternately wider and narrower
- Varying bead height
- Unstable quality

**Solution:**
- Develop even work rhythm
- Maintain stable travel speed
- Use metronome or count to yourself
- Practice on samples

### Problem 18: Can't do intermittent technique

**Symptoms:**
- Arc goes out and won't reignite
- Pauses too long
- Lose short arc skill on reignition

**Solution:**

**Exercise 1: Rhythm practice**
1. Strike arc on sample
2. Count: "One-two" (1 sec pulse)
3. Break arc
4. "Pause" (0.5 sec pause)
5. Repeat 20-30 times in row

**Exercise 2: Fixed distances**
1. Mark line on sample with points every 5 mm
2. One pulse - one point
3. Achieve uniformity

**Exercise 3: Reducing pauses**
1. Start with 2 sec pauses
2. Gradually reduce to 0.5-1 sec
3. Learn to quickly find correct electrode position

### Problem 19: Can't maintain short arc

**Symptoms:**
- Arc alternately too long or sticking
- Unstable distance
- Lots of spatter or sticking

**Solution:**

**Exercise: Stability training**
1. Strike arc
2. Hold electrode motionless 5-10 seconds
3. Watch weld pool
4. Develop muscle memory
5. Use hand rest (table edge, part)

**Tip:**
- Hold electrode holder like pen
- Fix wrist
- Use small finger movements, not whole arm

## Diagnostic Flowchart

### Quick problem diagnosis:

```
ARC WON'T IGNITE?
├─ HF not working → Check settings, enable HF Start
├─ HF works but arc won't ignite → Check ground, increase current
└─ Ignites and immediately goes out → Increase current, soften V-A to 1.5-2.0 V/A

CONSTANT STICKING?
├─ Stiff V-A → Increase to 1.5-2.0 V/A
├─ Low current → Increase by 10-15 A
└─ Arc too short → Increase length to 2-3 mm

UNSTABLE ARC?
├─ Long arc → Reduce to 1-2 mm
├─ Stiff V-A → Soften to 1.3-1.5 V/A
├─ Magnetic blow → Relocate ground
└─ Wet electrodes → Bake electrodes

BURN-THROUGH?
├─ High current → Reduce by 10-20 A
├─ Slow welding → Increase speed
└─ No pauses → Use intermittent technique

LACK OF PENETRATION?
├─ Low current → Increase by 10-20 A
├─ Fast welding → Reduce speed
└─ Long arc → Reduce to 1-2 mm

EXCESSIVE SPATTER?
├─ Long arc → Reduce to 1-2 mm (MOST COMMON CAUSE)
├─ High current → Reduce by 5-10 A
└─ Stiff V-A → Soften to 1.3-1.5 V/A
```

## When to Contact Specialist

### Signs of serious equipment malfunction:

🚨 **Immediately stop work and contact specialist:**

- Burning smell or smoke from power source
- Sparking inside housing
- Electric shock when touching housing
- HF oscillator completely non-functional after all checks
- Power source won't turn on
- Constant protection trips even at low currents
- Unusual sounds (humming, crackling) from power source
- Visible board or component damage

### Preventive maintenance:

Annual service by specialist recommended:
- Dust cleaning
- Contact inspection
- Capacitor check
- Parameter calibration
- Insulation check
- Worn component replacement

---

**Next step:** If problems arise, refer to the [Equipment Setup](welding_equipment.md) section for proper configuration or consult this troubleshooting guide.
