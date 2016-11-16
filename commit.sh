#!/bin/bash

gulp &&
git commit -am \'"$1"\' && git push origin master
#cp coco_vs_paint.js ../LuizOtav.io/coco_vs_paint &&
#cp -r assets ../LuizOtav.io/coco_vs_paint &&
#rm coco_vs_paint &&
#cd ../LuizOtav.io &&
#git add * && git commit -m "changes in Luiz0tavio/coco_vs_paint" && git push origin master