# Theoretical Justification of the Method

## Introduction

This document describes the theoretical foundations of using a TIG welding power source with coated electrodes (MMA/SMAW type) for welding thin-walled parts.

## Problem Statement

### Initial Challenge

When welding thin-walled steel parts (1-2 mm thickness) with coated electrodes, specific problems arise:

1. **Need for Precise Heat Input Control**
   - Risk of burn-through in thin metal
   - Distortion from overheating
   - Necessity of intermittent welding to control temperature

2. **Vitrified Coating Problem**
   - After first ignition, LB52U type electrode coating melts
   - Glassy crust forms
   - Re-ignition by standard method (contact) is difficult or impossible
   - Critical for spot welding and tack welds

3. **Standard Equipment Limitations**
   - SMAW power sources lack contactless ignition
   - Requires mechanical breaking of vitrified crust
   - Loss of time and reduced work quality

## Welding Arc Physics

### Conditions for Stable Arc Formation

To maintain a stable welding arc, the following are required:

1. **Arc Gap Ionization**
   - Air gap must become electrically conductive
   - Achieved at 6000-7000°C temperature
   - Maintained by thermal and impact ionization

2. **Sufficient Voltage**
   - Open circuit voltage: 50-90 V
   - Arc working voltage: 16-40 V

3. **Appropriate Current**
   - Depends on electrode diameter and coating type
   - For thin metal: 30-60 A

4. **Arc Stabilization**
   - Electrode coating contains ionizing elements
   - Provides thermionic emission and easy ionization

### Coated Electrode Characteristics

**LB52U Type Electrodes:**
- Basic (lime-type) coating
- Designed for low-alloy and high-strength steels
- High mechanical properties of the weld
- Require direct current reverse polarity (DCEP)
- Coating easily vitrifies when melted

**Re-ignition Problem:**
- Vitrified crust acts as dielectric
- Standard open circuit voltage (50-80 V) cannot penetrate the crust
- Requires either mechanical breaking or higher voltage

## Volt-Ampere Characteristics of Power Sources

### MMA (SMAW) Characteristics

**Drooping V-A Curve** - ideal for coated electrodes:
- Voltage drops significantly with current increase
- Droop coefficient: typically 2-4 V/A
- Provides arc self-regulation
- Current is limited by characteristic during short circuit
- Additional features: Arc Force, Hot Start

**Advantages:**
- Stable arc with arc length fluctuations
- No electrode sticking
- Easy re-ignition

### TIG Characteristics

**Constant Current (Flat) V-A Curve** - standard for TIG:
- Current remains nearly constant regardless of arc length
- Precise current control
- Optimal for non-consumable electrode

**Problems When Used with Coated Electrodes:**
- Slightest arc length change causes sharp voltage spikes
- Frequent electrode sticking when approaching
- Unstable arc burning
- No boost during short circuits

**Sloped V-A Curve (e.g., 1.2 V/A)** - compromise solution:
- Intermediate characteristic between constant current and drooping
- With 10 A current increase, voltage drops by 12 V
- Softer arc behavior
- Acceptable for coated electrode work

## High-Frequency Ignition (HF Start)

### Operating Principle

Oscillator generates high-frequency high-voltage pulses:
- Frequency: 150-500 kHz
- Amplitude: 2000-6000 V
- Pulse duration: several microseconds

### Breakdown Mechanism

1. **High Voltage Penetrates Dielectric**
   - Even through vitrified coating crust
   - Creates ionized channel

2. **Main Arc Initiation**
   - Main current begins flowing through ionized channel
   - Arc ignites without mechanical contact

3. **Arc Maintenance**
   - After ignition, normal arc characteristic operates
   - HF pulses shut off (in "Start Only" mode)

### Advantages for Our Application

1. **Contactless Ignition**
   - No need to touch vitrified electrode to workpiece
   - Eliminates sticking
   - No coating damage

2. **Dielectric Breakthrough**
   - HF pulses penetrate vitrified crust
   - Enables multiple re-ignitions

3. **Intermittent Welding Capability**
   - Critical for thin metal
   - Precise heat input control

## Method Synergy

### Why the Combination Works

**Sloped V-A Curve (1.2 V/A) Provides:**
- Sufficient arc stability
- Self-regulation with minor length changes
- Acceptable short circuit behavior

**High-Frequency Ignition Adds:**
- Contactless ignition capability
- Breakthrough of vitrified coating
- Quick re-ignition for intermittent welding

**Result:**
- Stable arc despite non-ideal characteristic
- Spot welding and tack weld capability
- Controlled heat input to thin metal

## Method Limitations

### Theoretical Limitations

1. **V-A Curve Still Non-Optimal**
   - 1.2 V/A characteristic is softer than constant current but stiffer than ideal drooping
   - Requires highly skilled welder
   - Narrower range of operating parameters

2. **Lack of Specialized Functions**
   - No Arc Force - short circuit boost
   - No Hot Start - enhanced starting
   - No Anti-Stick - sticking protection

3. **Sticking Risk on Contact**
   - If electrode accidentally touches workpiece
   - Characteristic won't provide separation impulse

### Practical Limitations

1. **Metal Thickness**
   - Optimal: 1-2 mm
   - Method loses advantages with thickness >3 mm
   - Very thin metal (<0.8 mm) requires special caution

2. **Electrode Type**
   - Method verified with LB52U (basic coating)
   - Other coating types require experimental verification

3. **Operator Requirements**
   - SMAW experience necessary
   - Ability to maintain stable short arc
   - Quick response to process changes

## Application Areas

### Optimal Conditions

✅ **Recommended for:**
- Welding thin-walled steel structures (1-2 mm)
- Tack welds on thin metal
- Spot welding with heat input control
- Situations requiring intermittent welding
- Availability of TIG source with adjustable sloped V-A curve

❌ **Not recommended for:**
- Heavy-walled structures (>3 mm)
- Long continuous welds (standard SMAW is better)
- Critical structures without preliminary testing
- Work by unqualified personnel

## Conclusions

Using a TIG power source with sloped V-A curve and high-frequency ignition for coated electrode welding:

1. **Theoretically Justified** - combination compensates for each method's shortcomings
2. **Practically Applicable** - confirmed by experiments
3. **Has Limitations** - requires experience and not suitable for all tasks
4. **Solves Specific Problem** - thin-walled part welding with heat input control

The method is a **compromise solution** when specialized equipment is unavailable, but provides acceptable results with proper application.

## References

1. Technology of Electric Fusion Welding / ed. by B.E. Paton
2. Power Sources for Welding / V.V. Sidorov
3. Welder's Handbook / ed. by V.V. Stepanov
4. GOST 9466-75 - Coated Metal Electrodes
5. GOST 9467-75 - Electrodes for Arc Welding of Steels and Surfacing

---

**Note:** This document describes non-standard equipment usage. Before using the method, conduct testing on samples and verify results meet technical requirements.