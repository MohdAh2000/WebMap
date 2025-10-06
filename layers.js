var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'المحافظات',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> المحافظات'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'الجامعات',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> الجامعات'
            });

lyr_OSM_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSM_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'GOV_NAME': 'GOV_NAME', 'الاسم': 'الاسم', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Type': 'Type', 'POI': 'POI', 'Name': 'Name', 'الاسم': 'الاسم', });
lyr__1.set('fieldImages', {'GOV_NAME': 'TextEdit', 'الاسم': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Type': 'TextEdit', 'POI': 'TextEdit', 'Name': 'TextEdit', 'الاسم': '', });
lyr__1.set('fieldLabels', {'GOV_NAME': 'no label', 'الاسم': 'no label', });
lyr__2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Type': 'hidden field', 'POI': 'hidden field', 'Name': 'hidden field', 'الاسم': 'header label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});