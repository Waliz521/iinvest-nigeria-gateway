import { useState } from 'react'
import { Header } from '../components/Header'
import { MapView } from '../components/MapView'
import { Legend } from '../components/Legend'
import { MapLayerToggles } from '../components/MapLayerToggles'
import { TerritoryModal } from '../components/TerritoryModal'
import { HomeCtaSections } from '../components/HomeCtaSections'
import { SiteFooter } from '../components/SiteFooter'
import { MapContext, type MapFilters } from '../context/MapContext'
import type { TerritoryRecord } from '../types'

const DEFAULT_MAP_FILTERS: MapFilters = {
  territoryId: '',
  cityTerritoryId: '',
  status: '',
}

export function HomePage() {
  const [selected, setSelected] = useState<TerritoryRecord | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [showPolygons, setShowPolygons] = useState(true)
  const [showMarkers, setShowMarkers] = useState(true)
  const [showWorldExcludeMask, setShowWorldExcludeMask] = useState(true)
  const [filters, setFilters] = useState<MapFilters>(DEFAULT_MAP_FILTERS)

  return (
    <MapContext.Provider value={{ filters, setFilters }}>
      <div className="flex flex-col font-[Poppins,system-ui,sans-serif]">
        {/* Full-viewport map block — CTAs/footer follow in document flow below */}
        <div className="home-map-shell flex flex-col overflow-hidden bg-gray-100">
          <Header showFilters />
          <main className="home-map-main relative min-h-0 flex-1">
            <div className="absolute inset-0 z-0">
              <MapView
                showPolygons={showPolygons}
                showMarkers={showMarkers}
                showWorldExcludeMask={showWorldExcludeMask}
                onTerritorySelect={(t) => {
                  setSelected(t)
                  setModalOpen(true)
                }}
              />
            </div>
            <div className="pointer-events-none absolute right-2 top-2 z-[1000] w-max max-w-[min(calc(100vw-1rem),14rem)] sm:right-4 sm:top-4 sm:max-w-[16rem]">
              <div className="pointer-events-auto">
                <MapLayerToggles
                  showPolygons={showPolygons}
                  showMarkers={showMarkers}
                  showWorldExcludeMask={showWorldExcludeMask}
                  onPolygonsChange={setShowPolygons}
                  onMarkersChange={setShowMarkers}
                  onWorldExcludeMaskChange={setShowWorldExcludeMask}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-4 right-2 z-[1000] sm:bottom-6 sm:right-4">
              <div className="pointer-events-auto max-w-[min(100vw-5rem,12rem)] sm:max-w-none">
                <Legend />
              </div>
            </div>
          </main>
        </div>

        <HomeCtaSections />
        <SiteFooter />
      </div>
      <TerritoryModal territory={selected} open={modalOpen} onOpenChange={setModalOpen} />
    </MapContext.Provider>
  )
}
