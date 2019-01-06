
essex = {}

essex['EDB'] = {
    'name': 'Eurest Dun & Bradstreet',
    'zip_code': 0-7078,
    'latitude': 40.88553,
    'longitude': -74.062
}

essex['FLIK'] ={
    'name': 'FLIK Hospitality Group',
    'zip_code': 0-7039,
    'latitude': 40.78391,
    'longitude': -74.3143
}   
essex['HBCBS'] = {
    'name':'Horizon Blue Cross Blue Shield',
    'zip_code': 0-7105,
    'latitude': 40.73478,
    'longitude': -74.1648
}
essex['MSH'] = {
    'name': 'Mountainside Hospital',
    'zip_code': 0-7028,
    'latitude': 40.81149,
    'longitude': -74.2032
}
essex['CMMC'] = {
    'name': 'Clara Maass Medical Center',
    'zip_code': 0-7109,
    'latitude': 40.7857,
    'longitude': -74.1764
}
essex['MCSUDiner'] = {
    'name': 'MSU Diner',
    'zip_code': 0-7043,
    'latitude': 40.8623,
    'longitude': -74.1978
}
essex['MCSUFreeman'] = {
    'name': 'MSU Freeman',
    'zip_code': 0-7043,
    'latitude': 40.8623,
    'longitude': -74.1978
}
essex['MCSUStudentCenter'] = {
    'name': 'MSU Student Center',
    'zip_code': 0-7043,
    'latitude': 40.8623,
    'longitude': -74.1978
}
essex['MCSUChilis'] = {
    'name':'MSU Chilis',
    'zip_code': 0-7043,
    'latitude': 40.8623,
    'longitude': -74.1978
}
essex['MCSURathskeller'] = {
    'name':'MSU Rathskeller',
    'zip_code': 0-7043,
    'latitude': 40.8623,
    'longitude': -74.1978
}
essex["MCSU"] = {
    'name':'Montclair State U.',
    'zip_code': 0-7043,
    'latitude': 40.8623,
    'longitude': -74.1978
}
essex["Pru"] = {
    'name': 'Prudential Tower',
    'zip_code': 0-7102,
    'latitude': 40.69177,
    'longitude': -74.2809
}
essex["TBZoo"] = {
    'name':'Turtle Back Zoo',
    'zip_code':0-7052,
    'latitude': 40.7692,
    'longitude': -74.2809
}

#print(essex)
import json
s=json.dumps(essex)
#print(s)
with open("data.txt","w") as f:
    f.write(s)
    