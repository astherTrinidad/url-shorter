<?php

namespace App\Services;

use App\Repository\UrlRepository;
use App\Entity\Url;

class RedirectUrlManager {
    
    private $urlRepository;

    function __construct(UrlRepository $urlRepository) {
        $this->urlRepository = $urlRepository;
    }
    
    public function getUrl(string $key) : ?string {
        
        $url = $this->urlRepository->findOneBy(['shorter' => $key]);
        
        if(!$url){
            return null;
        }
        
        return $url->getOrigin();

    }
    
    
}
