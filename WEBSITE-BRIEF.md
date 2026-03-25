# LinguaAI for WPML — Website Brief

Dieses Dokument enthält alle Informationen, die ein LLM benötigt um eine Marketing-Website
für das Plugin zu erstellen. Struktur, Copy-Vorlagen, Feature-Beschreibungen,
Zielgruppen, Preismodell und Tonalität sind hier vollständig definiert.

**Zielsprache der Website: Englisch**
**Zielgruppe: International (primär EN, DE, FR)**

---

## 1. Produkt — Was ist LinguaAI for WPML?

LinguaAI for WPML ist ein WordPress-Plugin, das Seiteninhalte automatisch per KI übersetzt
und dabei tief in WPML (das meistgenutzte Mehrsprachigkeits-Plugin für WordPress)
integriert ist.

**Was es tut:**
Der User markiert Inhalte in seiner WordPress-Site, wählt Zielsprachen, und das Plugin
sendet den Content an OpenAI oder Anthropic Claude. Die Übersetzung läuft im Hintergrund —
der User muss nicht auf Ergebnisse warten. Fertige Übersetzungen werden direkt in WPML
eingetragen, ohne dass der User sie manuell kopieren oder einfügen muss.

**Was es ersetzt:**
Manuelles Übersetzen durch Texter oder langsames, teures menschliches Übersetzen.
Auch WPML's eigene Übersetzungsdienste (WPML Translation Services), die per Wort
abgerechnet werden und teuer sind.

**Was es voraussetzt:**
- WordPress 6.2+
- WPML Multilingual CMS (kostenpflichtiges WPML-Plugin)
- API-Key bei OpenAI und/oder Anthropic

---

## 2. Positionierung

### Headline-Optionen (für Hero-Section)

```
Option A:
Translate your WordPress site with AI.
No word counts. No agencies. Just results.

Option B:
Your WPML site. Any language. In seconds.
AI translation that fits your workflow — not the other way around.

Option C:
Stop paying per word.
LinguaAI translates your entire WordPress site with AI — fast, accurate, affordable.

Option D (technical audience):
GPT-5 and Claude — inside your WPML workflow.
Background processing. Full cost control. Zero word-count fees.
```

### Subheadline / Claim

```
LinguaAI for WPML brings the power of OpenAI and Anthropic Claude directly into
your WordPress admin — with background processing, glossary control, translation
profiles, and full cost transparency.
```

### Einzeiler (für Meta-Description, Cards, Social)

```
AI-powered WordPress translation for WPML sites. Supports OpenAI + Anthropic Claude.
Background processing, glossary, cost tracking — no per-word fees.
```

---

## 3. Zielgruppe

### Primäre Zielgruppe: WordPress-Site-Owner mit WPML

- Betreibt eine mehrsprachige WordPress-Site (z.B. 3–10 Sprachen)
- Nutzt bereits WPML (hat also das Problem: wie übersetze ich schnell?)
- Frustriert von manuellem Übersetzen oder teuren Übersetzungsdiensten
- Hat technisches Grundwissen (Plugin installieren, API-Key eingeben)
- Schaut auf Kosten: will per-Übersetzung zahlen (API-Kosten), nicht pro Wort

**Typische Personas:**

**"Der Agentur-Entwickler"**
Baut Websites für Kunden. Kunden wollen mehrsprachige Sites ohne Übersetzungsbudget.
Er sucht eine Lösung, die er einmalig einrichtet und die dann läuft.
Wert: Zeitersparnis, Wiederverwertbarkeit (Profiles, Templates), Kostenkontrolle.

**"Der E-Commerce-Betreiber"**
Hat einen WooCommerce-Store mit WPML, verkauft in mehrere Länder.
Produktbeschreibungen ändern sich regelmäßig — er kann nicht jedes Mal einen Texter beauftragen.
Wert: Geschwindigkeit, Glossar (Produktnamen korrekt übersetzen), Bulk-Übersetzung.

**"Der Content-Publisher"**
Betreibt ein Blog oder News-Portal in mehreren Sprachen.
Publiziert täglich neue Artikel, braucht schnelle Erstübersetzungen.
Wert: Hintergrundverarbeitung (kein Warten), Historie, günstige Kosten.

**"Der Solo-Developer"**
Baut seine eigene mehrsprachige Site. Kein Budget für Übersetzungsdienste.
Wert: OpenAI / Anthropic direkt anbinden, Kosten selbst im Griff.

### Sekundäre Zielgruppe: Technisch interessierte WP-Entwickler

Wollen verstehen wie die AI-Integration funktioniert. Schätzen Transparenz über die API-
Architektur, Background Processing, und Prompt-Kontrolle.

---

## 4. Kernprobleme — Was frustriert die Zielgruppe?

Diese Pain Points sollte die Website adressieren:

1. **WPML's eigene Übersetzungsdienste sind teuer** — sie rechnen pro Wort ab.
   Bei großen Sites oder regelmäßigen Updates summiert sich das schnell.

2. **Manuelles Übersetzen skaliert nicht** — bei jeder Inhaltsänderung muss alles wiederholt werden.

3. **Bestehende AI-Übersetzungs-Plugins sind begrenzt** — sie unterstützen nur einen Anbieter,
   bieten keine Prompt-Kontrolle, kein Glossar, keine Kosten-Transparenz.

4. **KI-Übersetzungen ohne Kontrolle produzieren inkonsistente Ergebnisse** — Markennamen
   werden falsch übersetzt, Fachtermini werden falsch verwendet.

5. **Warten auf Übersetzungen blockiert den Workflow** — synchrone API-Calls führen zu
   Timeouts bei langen Texten.

---

## 5. USPs — Was macht LinguaAI besser?

### USP 1: Zwei AI-Anbieter, eine Oberfläche
Wähle zwischen OpenAI (GPT-4o, GPT-5, GPT-5.4) und Anthropic Claude (Haiku, Sonnet, Opus).
Wechsle jederzeit. Kein anderes WPML-AI-Plugin bietet beides.

### USP 2: Echtes Background Processing
Übersetzungen laufen im Hintergrund via OpenAI Responses API — kein HTTP-Timeout,
kein Warten, kein blockierter Admin-Bereich. Du klickst, das Plugin arbeitet, du machst weiter.

### USP 3: Volle Kostenkontrolle
Sieh auf einen Blick: wie viele Tokens hat diese Übersetzung gekostet? Welcher Teil
des Prompts hat am meisten verbraucht? Cached Tokens reduzieren Kosten automatisch.
Du zahlst immer direkt an OpenAI/Anthropic — kein Aufpreis, kein Markup.

### USP 4: Glossar — Terminologiekontrolle
Definiere Fachbegriffe, Produktnamen und Markenwörter die immer gleich übersetzt werden.
Global oder pro Sprachpaar. CSV oder JSON. Das Glossar wird automatisch in jeden Prompt injiziert.

### USP 5: Translation Profiles
Bündle Modell + Prompt-Template + Glossar-Einstellung in einem wiederverwendbaren Profil.
"Schnell & günstig" für Blog-Drafts. "Präzise & komplett" für Produktseiten.
Einmal anlegen, immer wieder nutzen.

### USP 6: Prompt-Kontrolle
Schreibe deinen eigenen System-Prompt. Erstelle Prompt-Templates für verschiedene
Content-Typen. Passe den Prompt pro Job an — direkt im Admin, ohne Code.

---

## 6. Feature-Liste (für Website)

Gruppiert nach Thema, mit kurzen Marketing-Beschreibungen:

### AI & Modelle
- **OpenAI Support** — GPT-4o Mini, GPT-4o, GPT-4.1 Nano/Mini, GPT-5 Mini, GPT-5, GPT-5.4
- **Anthropic Claude Support** — Claude Haiku 4.5, Sonnet 4.6, Opus 4.6
- **One-click provider switch** — switch between OpenAI and Claude at any time
- **Background Processing** — async translation via OpenAI Responses API; no timeouts

### Content & Integration
- **Full WPML Integration** — translates directly into WPML's multilingual structure
- **Posts, Pages, Custom Post Types** — any registered post type is translatable
- **Taxonomy Terms** — categories, tags, and custom taxonomies
- **ACF Integration** — translates Advanced Custom Fields (with per-field opt-out)
- **Page Builder Support** — Bricks Builder and Elementor content extraction
- **Translate Again** — re-translate already-translated content with one click

### Cost & Transparency
- **Per-job cost tracking** — input, output and cached token counts for every translation
- **Cost Details modal** — breakdown by component: system prompt / context / glossary / custom prompt / content
- **Monthly cost dashboard** — see your total AI spend at a glance
- **Pricing info modal** — per-model pricing table with cached token explanation
- **Direct API billing** — you pay OpenAI/Anthropic directly; no markup

### Terminology & Quality
- **Glossary** — global and per-language-pair terminology control
- **CSV or JSON input** — paste your terms in any format
- **Per-job glossary toggle** — disable glossary for specific jobs when not needed
- **Custom system prompt** — full control over the translation instruction
- **Prompt Templates** — reusable templates for different content types

### Workflow
- **Translation Profiles** — bundle model + prompt + glossary into reusable presets
- **3-second cancel window** — cancel a translation within 3 seconds of clicking
- **Translation History** — full log of all jobs with status, model, cost, tokens
- **Cost Details per job** — open a breakdown modal for any historical translation
- **Logs** — error and info log with level filter
- **Diagnostics** — automated health checks (API key, cron, failed jobs)

---

## 7. Preismodell (geplant)

> Hinweis: Das Plugin ist aktuell (2026-Q1) noch nicht öffentlich veröffentlicht.
> Das folgende Preismodell ist geplant für den Launch.

### Free (WordPress.org)
- OpenAI support (GPT-4o Mini, GPT-4o)
- Post translation
- Basic translation history
- Basic settings

### Pro — Single Site: €49/Jahr
- Everything in Free
- Anthropic Claude support (Haiku, Sonnet, Opus)
- All OpenAI models including latest (GPT-5, GPT-5.4)
- Term translation (categories, tags)
- ACF Integration
- Page Builder support (Bricks, Elementor)
- Glossary (global + per-language-pair)
- Prompt Templates
- Translation Profiles
- Cost tracking & transparency
- Diagnostics
- Priority support
- Model compatibility updates

### Pro — Agency / Unlimited Sites: €99/Jahr
- Everything in Pro Single Site
- Unlimited WordPress installations

**Wettbewerbsvorteil gegenüber Alternativen:**
- WPML Translation Services: ab ~€0.07/Wort → bei 10.000 Wörtern = €700. LinguaAI Pro kostet €49/Jahr + direkten API-Kosten (ca. €0.50–5 für 10.000 Wörter).
- DeepL WPML Integration: kein AI-Prompt-Kontrolle, kein Glossar im Plugin, nur ein Anbieter.

---

## 8. Tonalität & Stil

**Ton:** Professionell, direkt, technisch kompetent — aber nicht überheblich.
Spricht WP-Entwickler und ernsthafte Site-Owner an, nicht Einsteiger.

**Was funktioniert:**
- Konkret statt vage: "Translates in the background — no HTTP timeouts" statt "fast translation"
- Zahlen wo möglich: "3-second cancel window", "up to 90% cheaper with cached tokens"
- Feature-Ehrlichkeit: Sag was es tut, nicht was es angeblich magisch bewirkt

**Was vermeiden:**
- Übertriebene Superlative ("the best", "revolutionary", "game-changing")
- Vage AI-Marketing-Sprech ("powered by the latest AI", "cutting-edge")
- Versprechen die von der API-Qualität abhängen ("perfect translations")

**Tonbeispiele:**

Gut: "You pay OpenAI directly. No markup. No middleman."
Gut: "Glossary entries are injected into every prompt — automatically."
Gut: "Switch between GPT-5 and Claude Sonnet in settings. No code."

Schlecht: "Revolutionary AI translation that will transform your multilingual workflow!"
Schlecht: "Powered by the world's most advanced language models."

---

## 9. Vorgeschlagene Website-Struktur

### Seiten

```
/                       Landing Page (Hero, Features, Pricing, FAQ, CTA)
/features               Detaillierte Feature-Übersicht
/pricing                Preistabelle mit Free vs Pro Vergleich
/docs                   Dokumentation / Getting Started
/changelog              Versionshistorie
```

### Landing Page — Abschnittsreihenfolge

```
1. HERO
   Headline + Subheadline + CTA-Button ("Get Pro" / "Download Free")
   Optional: kurzes GIF/Screenshot des Admin-UI

2. PROBLEM SECTION
   "You already have WPML. Now what?"
   3 Pain Points: teuer, langsam, unkontrolliert

3. SOLUTION SECTION
   "LinguaAI bridges your WPML setup with OpenAI and Claude."
   1-2 Sätze pro Kernkonzept (Background Processing, Glossary, Profiles)

4. FEATURE HIGHLIGHTS
   6 Feature-Cards mit Icon + kurzer Beschreibung:
   - Two AI providers
   - Background processing
   - Glossary & terminology
   - Translation Profiles
   - Full cost transparency
   - Prompt control

5. HOW IT WORKS
   3-Schritt-Prozess:
   Step 1: Install & connect your API key
   Step 2: Pick content, choose languages, click Translate
   Step 3: Done — LinguaAI handles the rest in the background

6. PRICING
   Free vs Pro (Single) vs Pro (Agency)
   Vergleichstabelle mit Feature-Checkmarks

7. FAQ
   Häufige Fragen (siehe Abschnitt 10)

8. CTA
   "Start translating today."
   Download Free / Get Pro
```

---

## 10. FAQ — Inhalt

**Do I need WPML to use LinguaAI?**
Yes. LinguaAI is an add-on to WPML — it uses WPML's multilingual structure to store and
manage translations. WPML Multilingual CMS is required.

**Which AI providers are supported?**
LinguaAI supports OpenAI (GPT-4o, GPT-5, GPT-5.4 and more) and Anthropic Claude
(Haiku, Sonnet, Opus). You can switch between providers in the settings at any time.

**How do I pay for translations?**
You pay OpenAI or Anthropic directly through your own API key. LinguaAI does not charge
per word or per translation — you only pay the plugin license (Free or Pro) plus your
direct API usage.

**How much does a translation cost?**
Costs depend on the AI model and content length. As a rough estimate: translating a
1,000-word page with GPT-4o Mini costs around €0.01–0.05. The plugin shows you the
exact token count and cost for every job in the History view.

**What are cached tokens?**
OpenAI automatically caches repeated prompt prefixes (your system prompt, glossary,
website context). When the same prefix is used again, those tokens are served at a
significantly lower rate — up to 90% cheaper. LinguaAI tracks cached tokens separately
so you can see the savings.

**Can I control how the translation sounds?**
Yes. You can write a custom system prompt, create reusable Prompt Templates for different
content types, and use Translation Profiles to bundle model + prompt + glossary settings.

**What if I have specific terminology that must not change?**
Use the Glossary feature. Define source and target terms in CSV or JSON format — globally
or per language pair. The glossary is automatically injected into every translation prompt.

**Does translation happen in real time?**
For OpenAI: no — and that's intentional. Translations are sent to OpenAI's background
processing queue and retrieved by a WordPress cron job once complete. This prevents
timeouts on long texts. For Anthropic: translations are synchronous (the Anthropic API
works this way by design).

**Does it translate ACF fields and page builder content?**
Yes. ACF fields are translated automatically (with per-field opt-out). Bricks Builder and
Elementor content is extracted and re-injected correctly.

**Is my content sent to OpenAI/Anthropic?**
Yes — the content to be translated is sent to the respective API for processing. This is
standard for AI-powered tools. Review OpenAI's and Anthropic's privacy policies for
details on data handling.

**What is the Free version missing?**
The Free version supports OpenAI (GPT-4o Mini, GPT-4o) and basic post translation.
Pro adds: Anthropic Claude, all OpenAI models, ACF, page builders, Glossary, Prompt
Templates, Translation Profiles, Cost tracking, and priority support.

---

## 11. Vergleich mit Alternativen (für Pricing-Seite oder Feature-Seite)

| Feature | LinguaAI Pro | WPML Translation Services | DeepL for WPML |
|---|---|---|---|
| AI Provider | OpenAI + Anthropic | OpenAI (via WPML) | DeepL only |
| Background processing | ✅ | ❌ | ❌ |
| Custom prompts | ✅ | ❌ | ❌ |
| Glossary | ✅ | ❌ | Limited |
| Translation Profiles | ✅ | ❌ | ❌ |
| Cost per word | API-Kosten only | ~€0.07/Wort | Subscription |
| Cost transparency | ✅ Full breakdown | ❌ | ❌ |
| ACF Integration | ✅ | ❌ | ❌ |
| Page Builder support | ✅ Bricks + Elementor | ❌ | ❌ |
| License | €49–99/Jahr | Pro Wort | Subscription |

---

## 12. Screenshots / UI-Beschreibungen

*(Für das LLM: Diese Abschnitte beschreiben was auf Screenshots zu sehen wäre — nützlich
wenn noch keine echten Screenshots vorhanden sind.)*

**Dashboard:**
Dunkler Admin-Header. Vier Stat-Cards: Queue (blau), Completed (grün), Failed (rot), Cost.
Darunter: System Health Checklist. Rechts oben: "Token Cost Info" Button.

**Translations View:**
Tabelle mit Checkbox-Spalten pro Zielsprache. Pro Zeile: Translate-Button (primär, blau),
Prompt-Button (ghost), Glossar-Toggle (Checkbox), Profile-Button (ghost).
Spalten sortierbar. Tabs nach Post-Type oben.

**History View:**
Tabelle mit Status-Badges (farbcodiert), Model-Badge mit Provider-Label,
Token-Spalten (🔵 für cached), Cost-Spalte, "Cost Details"-Button.

**Cost Details Modal:**
Balken-Visualisierung der Token-Verteilung: System Prompt / Website Context / Glossary /
Custom Prompt / Content. Darunter: Zahlen (Input / Output / Cached) und errechneter Preis.

**Settings — Glossary Tab:**
"Global" Textarea oben (CSV oder JSON). Darunter: Pair-Cards ("DE → EN", "DE → FR")
mit je eigenem Textarea. "Add Glossary" Button zum Hinzufügen neuer Sprachpaare.

---

## 13. Rechtliches (für Footer/Disclaimer)

**Lizenz:** GPLv2 or later
**Autor:** Max Korn — maxkorn.de
**API-Nutzung:** Nutzer verbinden ihr eigenes OpenAI/Anthropic-Konto. Der Plugin-Autor
hat keinen Zugriff auf Nutzerdaten oder API-Aktivitäten.
**Kostenschätzung:** Alle angezeigten Tokenkosten sind Schätzungen auf Basis
veröffentlichter Preislisten. Tatsächliche Kosten können abweichen. Nutzer sollten
ihre Ausgaben direkt im OpenAI- oder Anthropic-Dashboard verifizieren.
**WPML:** LinguaAI for WPML ist kein offizielles WPML-Produkt und steht in keiner
Verbindung zu OnTheGoSystems (dem WPML-Hersteller).
