# Design Document

## Overview

This design implements a multilingual README system for the welding techniques repository. The solution creates separate README files for each supported language (Russian, English, Chinese, Arabic) and adds a language selector at the top of each file. The language selector uses flag emojis and language names to provide clear visual navigation between versions.

## Architecture

### File Structure

The implementation follows GitHub's README naming conventions:

```
welding-techniques-by-Cloude-AI/
├── README.md           # Russian (default, displayed on GitHub homepage)
├── README.en.md        # English version
├── README.zh.md        # Chinese version
├── README.ar.md        # Arabic version
└── ...
```

### Language Selector Design

The language selector will be placed at the very top of each README file, before the title. It will use a horizontal layout with the following format:

```markdown
[🇷🇺 Русский](README.md) | [🇬🇧 English](README.en.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md)
```

For the current language version, the link will be replaced with bold text to indicate the active language:

```markdown
**🇷🇺 Русский** | [🇬🇧 English](README.en.md) | [🇨🇳 中文](README.zh.md) | [🇸🇦 العربية](README.ar.md)
```

### Visual Separator

A horizontal rule (`---`) will be added after the language selector to visually separate it from the main content.

## Components and Interfaces

### Language Selector Component

**Structure:**
- Flag emoji + Language name (in native script)
- Pipe separator (`|`) between languages
- Current language shown in bold without link
- Other languages shown as clickable Markdown links

**Languages:**
1. Russian (ru): 🇷🇺 Русский → `README.md`
2. English (en): 🇬🇧 English → `README.en.md`
3. Chinese (zh): 🇨🇳 中文 → `README.zh.md`
4. Arabic (ar): 🇸🇦 العربية → `README.ar.md`

### README File Template

Each README file will follow this structure:

```markdown
[Language Selector]

---

# [Title in respective language]

[Badges]

[Content sections...]
```

## Data Models

### Language Configuration

```
Language: {
  code: string          // ISO 639-1 code (ru, en, zh, ar)
  name: string          // Native language name
  flag: string          // Flag emoji
  filename: string      // README filename
  isDefault: boolean    // Whether this is the default (README.md)
}
```

### Supported Languages

| Code | Name | Flag | Filename | Default |
|------|------|------|----------|---------|
| ru | Русский | 🇷🇺 | README.md | Yes |
| en | English | 🇬🇧 | README.en.md | No |
| zh | 中文 | 🇨🇳 | README.zh.md | No |
| ar | العربية | 🇸🇦 | README.ar.md | No |

## Content Translation Strategy

### Initial Implementation

For the initial implementation, the English, Chinese, and Arabic versions will be created with placeholder content that mirrors the Russian structure. The actual translation of content will be handled separately or can be done incrementally.

### Content Sections to Translate

All sections from the Russian README must be translated:
1. Title and subtitle
2. Project description
3. About the project
4. Thematic areas
5. Documentation section
6. Quick start guide
7. Repository structure
8. Contributing guidelines
9. Technologies
10. License
11. Contacts

### Translation Notes

- **Code blocks**: Command examples remain the same across languages
- **URLs**: Links to documentation and GitHub remain the same
- **File paths**: Directory structure descriptions remain in English
- **Technical terms**: Some technical terms may remain in English or be transliterated

## Error Handling

### Broken Links

- All language selector links use relative paths to ensure they work in any context (GitHub, local clone, forks)
- If a language file is missing, GitHub will show a 404 page with a clear error message

### Encoding Issues

- All README files will be saved with UTF-8 encoding to support multilingual characters
- Special attention to right-to-left (RTL) text for Arabic

### Maintenance

- When updating content, all language versions should be updated to maintain consistency
- A comment or note can be added to each README indicating the last update date

## Testing Strategy

### Manual Testing

1. **Visual Verification**: Check that language selector displays correctly on GitHub for each README file
2. **Link Testing**: Click each language link to verify navigation works correctly
3. **Current Language Highlighting**: Verify that the current language is shown in bold without a link
4. **Content Consistency**: Verify that all sections are present in each language version
5. **Encoding Test**: Verify that special characters display correctly (Cyrillic, Chinese, Arabic)

### Cross-Browser Testing

- Test README display on GitHub web interface
- Test README display in GitHub mobile app
- Test README display in local Markdown viewers

### Accessibility

- Ensure flag emojis have proper Unicode support
- Verify that RTL text (Arabic) displays correctly
- Ensure links have sufficient contrast and are keyboard-accessible

## Implementation Approach

### Phase 1: Create Language Selector Template

Create the language selector format that will be used across all README files.

### Phase 2: Create English README

Translate the Russian README.md content to English and save as README.en.md with the language selector.

### Phase 3: Create Chinese README

Translate the Russian README.md content to Chinese and save as README.zh.md with the language selector.

### Phase 4: Create Arabic README

Translate the Russian README.md content to Arabic and save as README.ar.md with the language selector, paying attention to RTL formatting.

### Phase 5: Update Russian README

Add the language selector to the existing README.md file.

### Phase 6: Verification

Test all language selectors and verify navigation works correctly between all versions.

## Design Decisions and Rationales

### Decision 1: Use GitHub's README.{lang}.md Convention

**Rationale**: GitHub doesn't natively support language-specific READMEs, but using the `.{lang}.md` suffix is a common community convention that is clear and maintainable.

### Decision 2: Keep README.md as Russian

**Rationale**: The project's primary audience is Russian-speaking, and changing the default would break existing links and expectations.

### Decision 3: Place Language Selector at Top

**Rationale**: Users should immediately see language options when opening the README, before any content.

### Decision 4: Use Flag Emojis

**Rationale**: Flags provide instant visual recognition and are universally understood, making language selection intuitive.

### Decision 5: Bold Current Language Instead of Link

**Rationale**: This provides clear visual feedback about which version the user is currently viewing and prevents unnecessary self-referential links.

### Decision 6: Use Pipe Separators

**Rationale**: Pipe characters (`|`) are a common convention for navigation menus in Markdown and provide clear visual separation.

### Decision 7: Horizontal Rule After Selector

**Rationale**: Creates clear visual separation between navigation and content, improving readability.
