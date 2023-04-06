import os
import json

# walk is likely better the point is more about customising etc.. and a base test.. 
# need to add a walk variant somewhere else though.. this is not meant to be fast or whatever
def map_file_path(path):
    result = {}
    for entry in os.scandir(path):
        if entry.is_dir():
            result[entry.path] = map_file_path(entry.path)
        else:
            try:
                stats = entry.stat()
                result[entry.path] = { **stats.__dict__, "path": entry.path }
            except OSError as error:
                result[entry.path] = str(error)
    return result

if __name__ == "__main__":
    path = input()
    print(json.dumps(map_file_path(path)))
