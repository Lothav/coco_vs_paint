#!/bin/bash

gulp &&
git commit -am "$1" && git push origin master &&
mv coco_vs_paint.js ../LuizOtav.io/coco_vs_paint &&
cp -r assets ../LuizOtav.io/coco_vs_paint &&
cd ../LuizOtav.io &&
git commit -am "changes in @Luiz0tavio/coco_vs_paint -> $1" && git push origin master