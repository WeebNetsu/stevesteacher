import subprocess

# Start sass watcher
sass = subprocess.Popen(["sass", "--watch", "src/css:src/css"])

# Start tsc watcher
tsc = subprocess.Popen(["tsc", "--watch"], cwd="src/js")

# Wait for both to finish (they won't unless you stop them)
sass.wait()
tsc.wait()
