import json

with open("nj_new_jersey_zip_codes_geo.min.json") as fo:
    data1 = json.load(fo)

with open("pa_pennsylvania_zip_codes_geo.min.json") as fo:
    data2 = json.load(fo)

data1.update(data2)

with open("merge.json", "w") as fo:
    json.dump(data1, fo)