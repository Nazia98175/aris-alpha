import Papa from 'papaparse'

export default async function parseCSVFile(file: File | string): Promise<unknown[]> {
    return new Promise<unknown[]>((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                resolve(results.data)
            },
            error: (error) => {
                reject(error)
            },
        })
    })
}
