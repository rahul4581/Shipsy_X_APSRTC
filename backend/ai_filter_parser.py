import sys
import json

# Read the input JSON from stdin
input_data = sys.stdin.read()
payload = json.loads(input_data)

filter_data = payload.get("filterData", {})
busses = payload.get("busses", [])

search = filter_data.get("search", "").lower()
route = filter_data.get("route", "").lower()
refrigeration = filter_data.get("refrigeration", "").lower() == "true"

# Simple filtering logic (you can replace with AI logic)
matches = []
for bus in busses:
    if route and route not in bus.get("route", "").lower():
        continue
    if refrigeration and not bus.get("refrigeration", False):
        continue
    if search and search not in bus.get("name", "").lower():
        continue
    matches.append(bus)

# Output the matches as JSON
print(json.dumps(matches))
