# Design System - CV Portfolio

Sistema de design profissional implementado no projeto CV.

## 🎨 Cores

### Cores da Marca
- **Primary**: `#67159C` - Roxo principal
- **Secondary**: `#E82D92` - Rosa/Magenta
- **Accent**: `#07D962` - Verde destaque

### Tema Escuro (Dark Theme)
- **Background Primary**: `#19181F`
- **Background Secondary**: `#1E1E26`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#D1D5DB`
- **Text Tertiary**: `#9CA3AF`
- **Border**: `rgba(103, 21, 156, 0.2)`

### Tema Claro (Light Theme)
- **Background Primary**: `#F8F9FA`
- **Background Secondary**: `#FFFFFF`
- **Text Primary**: `#1F2937`
- **Text Secondary**: `#4B5563`
- **Text Tertiary**: `#6B7280`
- **Border**: `rgba(103, 21, 156, 0.15)`

## 📏 Espaçamento (8pt Grid System)

```typescript
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
5xl: 128px
```

## 📝 Tipografia

### Font Sizes
```
xs: 12px
sm: 14px
base: 16px
lg: 18px
xl: 20px
2xl: 24px
3xl: 30px
4xl: 36px
5xl: 48px
6xl: 60px
7xl: 72px
```

### Font Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Line Heights
- Tight: 1.25
- Normal: 1.5
- Relaxed: 1.75
- Loose: 2.0

## 🎭 Tema (Dark/Light Mode)

### Uso do Hook
```typescript
import { useTheme } from './contexts/ThemeContext';

const { theme, toggleTheme, setTheme } = useTheme();
```

### Classes CSS Customizadas
- `.bg-theme-primary` - Fundo primário do tema
- `.bg-theme-secondary` - Fundo secundário do tema
- `.text-theme-primary` - Texto primário do tema
- `.text-theme-secondary` - Texto secundário do tema
- `.text-theme-tertiary` - Texto terciário do tema
- `.border-theme` - Borda do tema

### Alternância de Tema
O tema é salvo no `localStorage` e persiste entre sessões.

## 🧱 Componentes Base

### ThemeToggle
Botão para alternar entre tema claro/escuro.

```tsx
import { ThemeToggle } from './components/common/ThemeToggle';

<ThemeToggle />
```

### GradientText
Texto com gradiente da marca.

```tsx
import { GradientText } from './components/common/GradientText';

<GradientText>Seu Texto</GradientText>
```

### SectionHeader
Cabeçalho de seção padronizado.

```tsx
import { SectionHeader } from './components/common/SectionHeader';

<SectionHeader title="Título da Seção" />
```

## 📐 Layout Padrões

### Container
```typescript
maxWidth: "max-w-7xl"
padding: "px-4 sm:px-6 lg:px-8"
```

### Seções
```typescript
paddingY: "py-20"
paddingX: "px-4"
```

### Cards
```typescript
padding: "p-6 md:p-8"
paddingSmall: "p-4 md:p-6"
```

### Gaps
```typescript
gridGap: "gap-6"
gridGapSmall: "gap-4"
gridGapLarge: "gap-8"
```

## 🎬 Animações

### Durations
- Fast: 150ms
- Normal: 300ms
- Slow: 500ms
- Slower: 1000ms

### Transitions
```typescript
all: "transition-all"
colors: "transition-colors"
transform: "transition-transform"
opacity: "transition-opacity"
```

## 📦 Como Usar Design Tokens

```typescript
import { SPACING, TYPOGRAPHY, LAYOUT, RADIUS } from './constants/designTokens';

// Usar espaçamento
className={SPACING.xl} // 2rem

// Usar tipografia
className={TYPOGRAPHY.fontSize['2xl']} // 1.5rem

// Usar layout
className={LAYOUT.maxWidth} // max-w-7xl

// Usar border radius
className={RADIUS.lg} // rounded-xl
```

## 🔍 Z-Index Scale

```
base: 0
dropdown: 10
sticky: 20
fixed: 30
modalBackdrop: 40
modal: 50
popover: 60
tooltip: 70
```

## 📱 Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## ✅ Checklist de Implementação

- [x] Cores da marca definidas
- [x] Tema dark/light implementado
- [x] Design tokens centralizados
- [x] Espaçamento padronizado (8pt grid)
- [x] Tipografia escalável
- [x] Componentes base reutilizáveis
- [x] Sistema de animações
- [x] Acessibilidade (ARIA, focus states)
- [x] Persistência de preferência de tema

## 🎯 Boas Práticas

1. **Sempre use design tokens** ao invés de valores hardcoded
2. **Mantenha consistência** entre componentes
3. **Teste ambos os temas** (dark e light)
4. **Respeite o espaçamento 8pt grid**
5. **Use classes semânticas** (bg-theme-primary vs bg-dark)
6. **Documente alterações** no sistema de design
