f=open("data.txt","r")
s=f.read()

import json
essex = json.loads(s)


print(essex["TBZoo"])