L.Control.Watermark=L.Control.extend({
            onAdd:function(map){
                var img = L.DomUtil.create('img');
                img.src = 'logo1.png';
                img.style.width = '200px';
                return img;
                },
                onRemove:function(map){},
                });
                L.control.watermark = function(opts){
                    return new L.Control.Watermark(opts);
                    }
                L.control.watermark({position:'bottomleft'}).addTo(map)
