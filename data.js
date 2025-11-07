const ROADMAP = {
  id: "root",
  label: "Geospatial Developer Roadmap",
  description:
    "CBS geliştiricisinin yetkinlik haritası. Her ana kategori altında ikinci seviye baloncuklar ve açılır detay kapsülleri bulunur.",
  categories: [
    {
      id: "gis",
      label: "GIS",
      topics: [
        {
          id: "temel-cbs",
          label: "Temel CBS",
          items: [
            {
              label: "Projeksiyon sistemleri",
              resources: [
                {
                  label: "Projeksiyonlara giriş (EPSG rehberi)",
                  url: "https://epsg.io/"
                },
                {
                  label: "GIS Lounge makalesi",
                  url: "https://www.gislounge.com/map-projections/"
                }
              ]
            },
            {
              label: "Vektör ve raster temelleri",
              resources: [
                {
                  label: "Esri vektör vs raster anlatımı",
                  url: "https://www.esri.com/about/newsroom/blog/vector-data-vs-raster-data/"
                }
              ]
            },
            {
              label: "Temel mekânsal analizler",
              resources: [
                {
                  label: "QGIS Training Manual",
                  url: "https://docs.qgis.org/latest/en/docs/training_manual/"
                }
              ]
            },
            {
              label: "Kartografya prensipleri",
              resources: [
                {
                  label: "Cartography Guide",
                  url: "https://cartography.io/"
                }
              ]
            }
          ]
        },
        {
          id: "standartlar",
          label: "Standartlar",
          items: [
            {
              label: "OGC: WMS, WFS, WCS, WMTS",
              resources: [
                {
                  label: "OGC Standartları",
                  url: "https://www.ogc.org/standards/"
                },
                {
                  label: "GeoServer WMS belgelendirmesi",
                  url: "https://docs.geoserver.org/latest/en/user/services/wms/index.html"
                }
              ]
            },
            {
              label: "OGC API: Features, Tiles, Processes, Records",
              resources: [
                {
                  label: "OGC API ana sayfası",
                  url: "https://ogcapi.ogc.org/"
                }
              ]
            },
            {
              label: "GeoJSON, TopoJSON, KML, GML",
              resources: [
                {
                  label: "GeoJSON spesifikasyonu",
                  url: "https://datatracker.ietf.org/doc/html/rfc7946"
                },
                {
                  label: "KML belge merkezi",
                  url: "https://developers.google.com/kml"
                }
              ]
            }
          ]
        },
        {
          id: "desktop-gis",
          label: "Desktop GIS",
          items: [
            {
              label: "QGIS",
              resources: [
                {
                  label: "QGIS resmi sitesi",
                  url: "https://qgis.org/"
                },
                {
                  label: "QGIS dökümantasyonu",
                  url: "https://docs.qgis.org/"
                }
              ]
            },
            {
              label: "ArcGIS Pro / ArcMap",
              resources: [
                {
                  label: "ArcGIS Pro başlangıç",
                  url: "https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview"
                }
              ]
            },
            {
              label: "gvSIG, SAGA GIS, GRASS GIS",
              resources: [
                {
                  label: "gvSIG Community",
                  url: "https://www.gvsig.com/en"
                },
                {
                  label: "SAGA GIS",
                  url: "http://www.saga-gis.org/en/index.html"
                },
                {
                  label: "GRASS GIS",
                  url: "https://grass.osgeo.org/"
                }
              ]
            }
          ]
        },
        {
          id: "web-gis",
          label: "Web GIS & Görselleştirme",
          items: [
            {
              label: "Leaflet",
              resources: [
                {
                  label: "Leaflet dokümantasyonu",
                  url: "https://leafletjs.com/reference.html"
                }
              ]
            },
            {
              label: "OpenLayers",
              resources: [
                {
                  label: "OpenLayers rehberi",
                  url: "https://openlayers.org/en/latest/doc/"
                }
              ]
            },
            {
              label: "MapLibre GL JS, Mapbox GL JS",
              resources: [
                {
                  label: "MapLibre GL JS",
                  url: "https://maplibre.org/maplibre-gl-js/docs/"
                },
                {
                  label: "Mapbox GL JS",
                  url: "https://docs.mapbox.com/mapbox-gl-js/api/"
                }
              ]
            },
            {
              label: "CesiumJS, TerriaJS",
              resources: [
                {
                  label: "CesiumJS rehberi",
                  url: "https://cesium.com/learn/"
                },
                {
                  label: "TerriaJS",
                  url: "https://terria.io/"
                }
              ]
            },
            {
              label: "deck.gl, Kepler.gl",
              resources: [
                {
                  label: "deck.gl",
                  url: "https://deck.gl/docs"
                },
                {
                  label: "Kepler.gl",
                  url: "https://docs.kepler.gl/"
                }
              ]
            }
          ]
        },
        {
          id: "cbs-sunucular",
          label: "CBS Sunucuları & Platformlar",
          items: [
            {
              label: "GeoServer",
              resources: [
                {
                  label: "GeoServer belgelendirmesi",
                  url: "https://docs.geoserver.org/latest/en/user/"
                },
                {
                  label: "GeoServer blog",
                  url: "https://geoserver.org/blog/"
                }
              ]
            },
            {
              label: "ArcGIS Server",
              resources: [
                {
                  label: "ArcGIS Server nedir?",
                  url: "https://www.esri.com/en-us/arcgis/products/arcgis-enterprise/arcgis-server"
                }
              ]
            },
            {
              label: "QGIS Server",
              resources: [
                {
                  label: "QGIS Server dokümantasyonu",
                  url: "https://docs.qgis.org/latest/en/docs/server_manual/"
                }
              ]
            }
          ]
        },
        {
          id: "raster-remote",
          label: "Raster & Uzaktan Algılama",
          items: [
            {
              label: "GDAL / OGR",
              resources: [
                {
                  label: "GDAL API",
                  url: "https://gdal.org/"
                }
              ]
            },
            {
              label: "rasterio",
              resources: [
                {
                  label: "rasterio dokümantasyonu",
                  url: "https://rasterio.readthedocs.io/"
                }
              ]
            },
            {
              label: "Orfeo ToolBox",
              resources: [
                {
                  label: "Orfeo ToolBox",
                  url: "https://www.orfeo-toolbox.org/"
                }
              ]
            },
            {
              label: "Google Earth Engine",
              resources: [
                {
                  label: "Earth Engine geliştirici rehberi",
                  url: "https://developers.google.com/earth-engine"
                }
              ]
            }
          ]
        },
        {
          id: "veri-kaynaklari",
          label: "Veri Kaynakları",
          items: [
            {
              label: "Açık veri portalları",
              resources: [
                {
                  label: "data.gov",
                  url: "https://www.data.gov/"
                },
                {
                  label: "European Data Portal",
                  url: "https://data.europa.eu/en"
                }
              ]
            },
            {
              label: "OpenStreetMap",
              resources: [
                {
                  label: "OpenStreetMap başlangıç",
                  url: "https://learnosm.org/en/"
                }
              ]
            },
            {
              label: "Uydu veri servisleri",
              resources: [
                {
                  label: "Copernicus Açık Erişim",
                  url: "https://dataspace.copernicus.eu/"
                },
                {
                  label: "USGS Earth Explorer",
                  url: "https://earthexplorer.usgs.gov/"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "database",
      label: "Database",
      topics: [
        {
          id: "ilisiksel-vt",
          label: "İlişkisel Veritabanları",
          items: [
            {
              label: "PostgreSQL",
              resources: [
                {
                  label: "PostgreSQL dokümantasyonu",
                  url: "https://www.postgresql.org/docs/"
                }
              ]
            },
            {
              label: "PostGIS",
              resources: [
                {
                  label: "PostGIS Handbook",
                  url: "https://postgis.net/documentation/"
                }
              ]
            },
            {
              label: "Oracle",
              resources: [
                {
                  label: "Oracle Database",
                  url: "https://www.oracle.com/database/"
                }
              ]
            },
            {
              label: "Oracle Spatial & Graph",
              resources: [
                {
                  label: "Oracle Spatial & Graph",
                  url: "https://www.oracle.com/database/spatial/"
                }
              ]
            },
            {
              label: "MySQL",
              resources: [
                {
                  label: "MySQL referansı",
                  url: "https://dev.mysql.com/doc/"
                }
              ]
            },
            {
              label: "MS SQL Server",
              resources: [
                {
                  label: "SQL Server dokümantasyonu",
                  url: "https://learn.microsoft.com/sql/"
                }
              ]
            }
          ]
        },
        {
          id: "etl",
          label: "ETL & Veri Entegrasyonu",
          items: [
            {
              label: "ogr2ogr",
              resources: [
                {
                  label: "ogr2ogr kullanımı",
                  url: "https://gdal.org/programs/ogr2ogr.html"
                }
              ]
            },
            {
              label: "FME",
              resources: [
                {
                  label: "FME Community",
                  url: "https://community.safe.com/s/"
                }
              ]
            },
            {
              label: "Talend",
              resources: [
                {
                  label: "Talend Data Integration",
                  url: "https://www.talend.com/products/data-integration/"
                }
              ]
            },
            {
              label: "Pentaho",
              resources: [
                {
                  label: "Pentaho dokümantasyonu",
                  url: "https://help.hitachivantara.com/Documentation/Pentaho"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "programming",
      label: "Programming",
      topics: [
        {
          id: "temel",
          label: "Temel",
          items: [
            {
              label: "Algoritma",
              resources: [
                {
                  label: "Algorithms, 4th Edition",
                  url: "https://algs4.cs.princeton.edu/home/"
                }
              ]
            },
            {
              label: "Veri yapıları",
              resources: [
                {
                  label: "VisuAlgo",
                  url: "https://visualgo.net/en"
                }
              ]
            },
            {
              label: "Temel tasarım kalıpları",
              resources: [
                {
                  label: "Refactoring Guru",
                  url: "https://refactoring.guru/design-patterns"
                }
              ]
            },
            {
              label: "Versiyon kontrol (Git, GitHub, GitLab, Bitbucket)",
              resources: [
                {
                  label: "Pro Git kitabı",
                  url: "https://git-scm.com/book/en/v2"
                }
              ]
            }
          ]
        },
        {
          id: "python",
          label: "Python",
          items: [
            {
              label: "geopandas, pandas",
              resources: [
                {
                  label: "GeoPandas",
                  url: "https://geopandas.org/"
                },
                {
                  label: "pandas",
                  url: "https://pandas.pydata.org/docs/"
                }
              ]
            },
            {
              label: "shapely, pygeos",
              resources: [
                {
                  label: "Shapely",
                  url: "https://shapely.readthedocs.io/"
                },
                {
                  label: "pygeos",
                  url: "https://pygeos.readthedocs.io/"
                }
              ]
            }
          ]
        },
        {
          id: "javascript",
          label: "JavaScript / TypeScript",
          items: [
            {
              label: "ES6+",
              resources: [
                {
                  label: "MDN ES6 rehberi",
                  url: "https://developer.mozilla.org/docs/Web/JavaScript"
                }
              ]
            },
            {
              label: "TypeScript",
              resources: [
                {
                  label: "TypeScript el kitabı",
                  url: "https://www.typescriptlang.org/docs/"
                }
              ]
            },
            {
              label: "Node.js",
              resources: [
                {
                  label: "Node.js dokümantasyonu",
                  url: "https://nodejs.org/en/docs"
                }
              ]
            },
            {
              label: "React / Next.js",
              resources: [
                {
                  label: "React dokümantasyonu",
                  url: "https://react.dev/"
                },
                {
                  label: "Next.js",
                  url: "https://nextjs.org/docs"
                }
              ]
            },
            {
              label: "Fetch API / Axios",
              resources: [
                {
                  label: "MDN Fetch API",
                  url: "https://developer.mozilla.org/docs/Web/API/Fetch_API"
                },
                {
                  label: "Axios",
                  url: "https://axios-http.com/docs/intro"
                }
              ]
            }
          ]
        },
        {
          id: "csharp",
          label: "C# / .NET",
          items: [
            {
              label: ".NET mekânsal kütüphaneler",
              resources: [
                {
                  label: "NetTopologySuite",
                  url: "https://nettopologysuite.github.io/"
                }
              ]
            },
            {
              label: ".NET REST servisleri",
              resources: [
                {
                  label: "ASP.NET Core",
                  url: "https://learn.microsoft.com/aspnet/core/"
                }
              ]
            }
          ]
        },
        {
          id: "java",
          label: "Java",
          items: [
            {
              label: "Java mekânsal eklentiler",
              resources: [
                {
                  label: "GeoTools",
                  url: "https://geotools.org/"
                }
              ]
            },
            {
              label: "Spring tabanlı servisler",
              resources: [
                {
                  label: "Spring Boot",
                  url: "https://spring.io/projects/spring-boot"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "cloud",
      label: "Cloud",
      topics: [
        {
          id: "cloud-yetkinlik",
          label: "Cloud",
          items: [
            {
              label: "Bulut platformları",
              resources: [
                {
                  label: "AWS öğrenme yolu",
                  url: "https://aws.amazon.com/training/"
                },
                {
                  label: "Azure mimari merkezi",
                  url: "https://learn.microsoft.com/azure/architecture/"
                }
              ]
            },
            {
              label: "Servis modelleri ve mimari",
              resources: [
                {
                  label: "Bulut mimarisi temelleri",
                  url: "https://cloud.google.com/learn/what-is-cloud-computing"
                }
              ]
            },
            {
              label: "CBS servis entegrasyonu",
              resources: [
                {
                  label: "ArcGIS Online geliştirici",
                  url: "https://developers.arcgis.com/"
                }
              ]
            },
            {
              label: "Depolama ve dağıtım",
              resources: [
                {
                  label: "Cloud Optimized GeoTIFF",
                  url: "https://www.cogeo.org/"
                }
              ]
            },
            {
              label: "Gözlem ve güvenlik",
              resources: [
                {
                  label: "AWS Well-Architected",
                  url: "https://aws.amazon.com/architecture/well-architected/"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "other",
      label: "Other (Bonus)",
      topics: [
        {
          id: "devops",
          label: "DevOps & Otomasyon",
          items: [
            {
              label: "CI/CD süreçleri",
              resources: [
                {
                  label: "GitHub Actions rehberi",
                  url: "https://docs.github.com/actions"
                }
              ]
            },
            {
              label: "Infrastructure as Code",
              resources: [
                {
                  label: "Terraform dokümantasyonu",
                  url: "https://developer.hashicorp.com/terraform/docs"
                }
              ]
            }
          ]
        },
        {
          id: "geoai",
          label: "Veri Bilimi & GeoAI",
          items: [
            {
              label: "Uzamsal veri bilimi",
              resources: [
                {
                  label: "Spatial Data Science Handbook",
                  url: "https://docs.spatial-data-science.com/"
                }
              ]
            },
            {
              label: "Mekânsal makine öğrenimi",
              resources: [
                {
                  label: "GeoAI rehberi",
                  url: "https://learn.arcgis.com/en/paths/geoai/"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
