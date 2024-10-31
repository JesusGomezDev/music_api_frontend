// artsts-rest.component.ts
import { CommonModule } from '@angular/common';
import { Component, AfterViewChecked } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';
import csharp from 'highlight.js/lib/languages/csharp';
import go from 'highlight.js/lib/languages/go';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('go', go);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);

@Component({
  selector: 'app-artsts-rest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artsts-rest.component.html',
  styleUrls: ['./artsts-rest.component.scss']
})
export class ArtstsRestComponent implements AfterViewChecked {
  selectedLanguage: string = 'python';

  endpoints = [
    {
      title: 'Get all artists',
      description: 'You can access a paginated list of artists using the <code>/artists</code> endpoint. The default pagination settings are:',
      pagination: {
        page: 1,
        limit: 20,
        offset: 0,
      },
      request: '[GET] https://musicapi.dev/artists',
      response: {
        artists: [
          {
            id: 1,
            name: '$NOT',
            listeners: 717480,
            playcount: '36484087'
          },
          {
            id: 2,
            name: 'Bloc Party',
            listeners: 2971706,
            playcount: '122978602'
          },
          {
            id: 3,
            name: 'Mobb Deep',
            listeners: 1410641,
            playcount: '28780082'
          },
        ],
        total: 1052,
        page: 1,
        limit: 20,
        totalPages: 53
      },
      examples: {
        python: `import requests

url = 'https://musicapi.dev/artists'

try:
    response = requests.get(url)

    response.raise_for_status()

    data = response.json()

    print(data)

except requests.exceptions.RequestException as e:
    print(f'There has been a problem with your request: {e}')
`,
        node: `const fetch = require('node-fetch');

const url = 'https://musicapi.dev/artists';

async function fetchArtists() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}
`,
        csharp: `using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

class Program
{
    static async Task Main(string[] args)
    {
        var url = "https://musicapi.dev/artists";

        using (var client = new HttpClient())
        {
            try
            {
                var response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode();

                var content = await response.Content.ReadAsStringAsync();

                var artists = JsonConvert.DeserializeObject<dynamic>(content);

                Console.WriteLine(artists);
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"There has been a problem with your request: {e.Message}");
            }
        }
    }
}
`,
        go: `package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
)

func main() {
    url := "https://musicapi.dev/artists"

    resp, err := http.Get(url)
    if err != nil {
        log.Fatalf("There has been a problem with your request: %v", err)
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        log.Fatalf("Error: received status %s", resp.Status)
    }

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        log.Fatalf("There has been a problem trying to read the response: %v", err)
    }

    var artists interface{}
    if err := json.Unmarshal(body, &artists); err != nil {
        log.Fatalf("Error deserializing JSON: %v", err)
    }

    fmt.Printf("Data: %+v ", artists)
}
`,
      },
      formattedResponse: JSON.stringify({
        artists: [
          {
            id: 1,
            name: '$NOT',
            listeners: 717480,
            playcount: '36484087'
          },
          {
            id: 2,
            name: 'Bloc Party',
            listeners: 2971706,
            playcount: '122978602'
          },
          {
            id: 3,
            name: 'Mobb Deep',
            listeners: 1410641,
            playcount: '28780082'
          },
        ],
        total: 1052,
        page: 1,
        limit: 20,
        totalPages: 53
      }, null, 2)
    },
  ];

  changeLanguage(language: string) {
    this.selectedLanguage = language;
  }

  ngAfterViewChecked() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }
}
