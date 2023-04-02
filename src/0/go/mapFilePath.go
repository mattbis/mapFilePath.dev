package main

import (
    "fmt"
    "os"
    "path/filepath"
)

type FileInfo struct {
    Name    string
    Size    int64
    Mode    os.FileMode
    ModTime int64
    IsDir   bool
    Sys     interface{}
}

func mapFilePath(filePath string) ([]FileInfo, error) {
    var results []FileInfo

    err := filepath.Walk(filePath, func(path string, info os.FileInfo, err error) error {
        if err != nil {
            return err
        }
        results = append(results, FileInfo{
            Name:    info.Name(),
            Size:    info.Size(),
            Mode:    info.Mode(),
            ModTime: info.ModTime().Unix(),
            IsDir:   info.IsDir(),
            Sys:     info.Sys(),
        })
        return nil
    })

    if err != nil {
        return nil, err
    }

    return results, nil
}

func main() {
    results, err := mapFilePath(".")
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(results)
}
