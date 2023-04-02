#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <dirent.h>
#include <string.h>

void mapFilePath(char *path) {
    struct stat st;
    if (stat(path, &st) == -1) {
        perror("stat");
        exit(EXIT_FAILURE);
    }

    printf("{ path: \"%s\", st_dev: %llu, st_ino: %llu, st_mode: %o, st_nlink: %lu, st_uid: %u, st_gid: %u, st_rdev: %llu, st_size: %lld, st_atime: %ld, st_mtime: %ld, st_ctime: %ld }\n",
        path,
        (unsigned long long) st.st_dev,
        (unsigned long long) st.st_ino,
        st.st_mode,
        (unsigned long) st.st_nlink,
        st.st_uid,
        st.st_gid,
        (unsigned long long) st.st_rdev,
        (long long) st.st_size,
        (long) st.st_atime,
        (long) st.st_mtime,
        (long) st.st_ctime);

    if (S_ISDIR(st.st_mode)) {
        DIR *dir;
        struct dirent *entry;

        if (!(dir = opendir(path))) {
            perror("opendir");
            exit(EXIT_FAILURE);
        }

        while ((entry = readdir(dir)) != NULL) {
            if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
                continue;
            }

            char *newPath = malloc(strlen(path) + strlen(entry->d_name) + 2);
            sprintf(newPath, "%s/%s", path, entry->d_name);
            mapFilePath(newPath);
            free(newPath);
        }

        closedir(dir);
    }
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        fprintf(stderr, "Usage: %s <path>\n", argv[0]);
        return EXIT_FAILURE;
    }

    mapFilePath(argv[1]);

    return EXIT_SUCCESS;
}
