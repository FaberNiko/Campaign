# Campaign - odzieżowe kampanie reklamowe

Projekt został zawężony do kampanii produktów **odzieżowych**.

##Funkcjonalności

- Dodawanie nowych kampanii reklamowych
- Edytowanie istniejących kampanii
- Usuwanie kampanii
- Walidacja budżetu (`bid` nie może przekraczać dostępnych środków)
- Dynamiczne zarządzanie funduszem (po edycji lub usunięciu kampanii fundusz jest aktualizowany)
- Stylizacja mobilna i desktopowa (Mobile First)
- Kolorowe oznaczenia statusów:
  - ✅ `on` – zielony (aktywny)
  - ❌ `off` – czerwony (nieaktywny)

## Technologie
- **React (Vite)**
- **SASS (SCSS)**
- Hooki: `useState`, `useEffect`
- Czyszczenie formularzy i zarządzanie modalami
  
## Przykładowe dane

Dostępne środki (`activeFund`) są inicjalizowane z pliku `data.js` i wynoszą np. **1000E**. Każda kampania odlicza z tej puli swój `bid`.

## Branża

Zdecydowano się zawęzić temat kampanii do **produktów odzieżowych** (np. koszulki, spodnie, kurtki), aby lepiej odwzorować typową strukturę kampanii reklamowych w e-commerce.

## Uruchomienie projektu
npm install
npm run dev

## Wersja live
https://campaign-three-gamma.vercel.app/
  
