import os
import json

# this has many problems as well..  I really like how easy it is to do the main part in python.. 
# i took no time on this.. but its fast.. surpsingly.. however.. its obiously not right.. 

def map_file_path(path):
    try:
        stats = os.stat(path)
        if os.path.isfile(path):
            return [{'path': path, 'stats': stats}]
        elif os.path.isdir(path):
            result = []
            for entry in os.scandir(path):
                if not entry.name.startswith('.') and entry.is_file():
                    result.append({'path': entry.path, 'stats': entry.stat()})
                elif entry.is_dir():
                    result += map_file_path(entry.path)
            return result
    except Exception as e:
        return [{'path': path, 'error': str(e)}]

if __name__ == "__main__":
    import sys
    path = sys.argv[1]
    result = map_file_path(path)
    print(json.dumps(result, indent=4))
